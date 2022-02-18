import { FormGroup, FormGroupWithDatepicker, FormGroupWithCounter } from './form-group/index.js';

export default class Form {
  constructor(form) {
    this.form = form;
    this._submitBtn = this.form.querySelector('[type="submit"]');
    this._groups = [];

    for (const group of this.form.querySelectorAll('.form-group')) {
      if (group.querySelector('.form-button-datepicker')) {
        this._groups.push(new FormGroupWithDatepicker(group));
      } else if (group.querySelector('.form-button-step-up')) {
        this._groups.push(new FormGroupWithCounter(group));
      } else {
        this._groups.push(new FormGroup(group));
      }
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._submitBtn.addEventListener('click', this._handleSubmit);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const validators = this._groups.map((group) => group.checkValidity());

    Promise.all(validators).then((results) => {
      if (results.every(Boolean)) {
        this.form.submit();
      }
    });
  }
}
