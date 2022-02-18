export default class FormGroup {
  constructor(group) {
    this._group = group;
    this._field = this._group.querySelector('.form-field');
    this._status = this._group.querySelector('.form-status');
  }

  checkValidity() {
    return new Promise((resolve) => {
      this._setStatus(this._field.validationMessage);
      resolve(this._field.validity.valid);
    });
  }

  _setStatus(message = this._field.validationMessage, error = true) {
    if (!this._status) {
      return;
    }
    this._status.textContent = message;

    if (error) {
      this._status.classList.add('form-status-error');
    } else {
      this._status.classList.remove('form-status-error');
    }
  }
}
