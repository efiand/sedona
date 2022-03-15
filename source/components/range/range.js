import noUiSlider from 'nouislider';

const messages = window.Data.messages.Range;

export default class Range {
  constructor(el) {
    this._el = el;
    this._slider = this._el.querySelector('.range-target');
    this._fromField = this._el.querySelector('.range-group:first-of-type input');
    this._toField = this._el.querySelector('.range-group:last-of-type input');

    this._init();
    this._setListeners();
  }

  get _params() {
    return {
      min: parseInt(this._fromField.min, 10),
      max: parseInt(this._fromField.max, 10),
      step: parseInt(this._fromField.step, 10)
    };
  }

  reset() {
    const { min, max } = this._params;
    this._slider.noUiSlider.set([min, max]);
  }

  _init() {
    const { min, max, step } = this._params;

    noUiSlider.create(this._slider, {
      start: [
        this._fromField.value || min,
        this._toField.value || max
      ],
      connect: true,
      range: {
        min,
        max
      },
      step,
      cssPrefix: 'range-',
      handleAttributes: [
        {
          'aria-label': messages.DOWN
        },
        {
          'aria-label': messages.UP
        }
      ]
    });
  }

  _setListeners() {
    this._handleUpdate = this._handleUpdate.bind(this);
    this._handleChange = this._handleChange.bind(this);

    this._slider.noUiSlider.on('update', this._handleUpdate);
    this._fromField.addEventListener('change', this._handleChange);
    this._toField.addEventListener('change', this._handleChange);
  }

  _handleUpdate([startValue, endValue]) {
    this._fromField.value = parseInt(startValue, 10);
    this._toField.value = parseInt(endValue, 10);
  }

  _handleChange() {
    this._slider.noUiSlider.set([this._fromField.value, this._toField.value]);
  }
}
