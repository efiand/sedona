export default class Catalog {
  constructor(el, ranges) {
    this._el = el;
    this._ranges = ranges;

    this._form= this._el.querySelector('form');
    this._submitters = this._el.querySelectorAll('[data-submit]');

    this._setListeners();
  }

  _setListeners() {
    this._handleSubmit = this._handleSubmit.bind(this);
    for (const submitter of this._submitters) {
      submitter.addEventListener('change', this._handleSubmit);
    }

    this._handleReset = this._handleReset.bind(this);
    this._form.addEventListener('reset', this._handleReset);
  }

  _handleSubmit() {
    this._form.submit();
  }

  _handleReset() {
    for (const range of this._ranges) {
      range.reset();
    }
  }
}
