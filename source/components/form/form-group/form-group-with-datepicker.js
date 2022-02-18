import flatpickr from 'flatpickr';
import FormGroup from './form-group.js';
import { formatNumberWithLeadZero } from '../../../lib/util.cjs';

const { monthsInGenitive } = window.Data;
const messages = window.Data.messages.Datepicker;
const TIMEOUT = 500;

export default class FormGroupWithDatepicker extends FormGroup {
  constructor(group) {
    super(group);

    this._datepicker = this._group.querySelector('.form-button-datepicker');
    this._calendar = null;
    this._availableDates = new Set();

    this._setListeners();
  }

  checkValidity() {
    const { valid } = this._field.validity;

    return new Promise((resolve) => {
      if (this._field.value && valid) {
        const [ day, month, year ] = this._field.value.split(' ');
        const dateString = [
          year,
          formatNumberWithLeadZero(monthsInGenitive.indexOf(month) + 1),
          formatNumberWithLeadZero(day)
        ].join('-');
        const ts = Date.parse(dateString);

        if (isNaN(ts)) {
          this._setStatus(messages.INCORRECT);
          return resolve(false);
        }

        const date = new Date(dateString);
        if (date.getTime() <= new Date().getTime()) {
          this._setStatus(messages.EXPIRED);
          return resolve(false);
        }

        this._checkAvailability(ts).then((isAvailable) => {
          this._setStatus(isAvailable ? messages.HAS : messages.HAS_NO, !isAvailable);
          return resolve(isAvailable);
        });
      } else {
        this._setStatus(this._field.validationMessage);
        return resolve(valid);
      }
    });
  }

  _setListeners() {
    this._handlePickDate = this._handlePickDate.bind(this);
    this._datepicker.addEventListener('click', this._handlePickDate);

    this._handleChange = this._handleChange.bind(this);
    this._field.addEventListener('change', this._handleChange);
  }

  _initDatepicker() {
    if (!this.checkValidity()) {
      this._field.value = ''; // Кривая дата вызывавет сбой инициализации
    }

    this._calendar = flatpickr(this._field, {
      minDate: 'today',
      formatDate(date) {
        const day = date.getDate();
        const month = monthsInGenitive[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
      }
    });
    this._datepicker.classList.add('form-button-active');
  }

  _destroyDatepicker() {
    this._calendar.destroy();
    this._calendar = null;
    this._datepicker.classList.remove('form-button-active');
  }

  _handlePickDate(evt) {
    evt.preventDefault();

    if (this._calendar) {
      this._destroyDatepicker();
    } else {
      this._initDatepicker();
    }

    this._field.focus();
  }

  _handleChange() {
    this.checkValidity();
  }

  _checkAvailability(ts) {
    return new Promise((resolve) => {
      // Достаём из кэша
      if (this._availableDates.has(ts)) {
        return resolve(true);
      }

      this._setStatus(messages.PENDING, false);

      // Фейковый метод проверки наличия мест
      setTimeout(() => {
        const res = Math.random() > 0.5;
        if (res) {
          this._availableDates.add(ts);
        }
        return resolve(res);
      }, TIMEOUT);
    });
  }
}
