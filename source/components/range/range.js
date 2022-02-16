import noUiSlider from 'nouislider';

export default class Range {
  constructor(el) {
    this._el = el;
    this._slider = this._el.querySelector('.range-slider-target');
    this._fromField = this._el.querySelector('.range-group:first-of-type input');
    this._toField = this._el.querySelector('.range-group:last-of-type input');

    this._init();
    this._setListeners();
  }

  get _params() {
    const min = parseInt(this._fromField.min, 10);
    const max = parseInt(this._fromField.max, 10);

    return {
      min,
      max,
      step: parseInt(this._fromField.step, 10),
      values: [
        this._fromField.value || min,
        this._toField.value || max
      ]
    };
  }

  _init() {
    const { min, max, step, values } = this._params;

    noUiSlider.create(this._slider, {
      start: values,
      connect: true,
      range: {
        min,
        max
      },
      step,
      cssPrefix: 'range-slider-',
      handleAttributes: [
        {
          'aria-label': 'Меньше.'
        },
        {
          'aria-label': 'Больше.'
        }
      ]
    });
  }

  _setListeners() {
    this._handleUpdate = this._handleUpdate.bind(this);
    this._handleInput = this._handleInput.bind(this);

    this._slider.noUiSlider.on('update', this._handleUpdate);
    this._fromField.addEventListener('input', this._handleInput);
    this._toField.addEventListener('input', this._handleInput);
  }

  _handleUpdate([startValue, endValue]) {
    this._fromField.value = parseInt(startValue, 10);
    this._toField.value = parseInt(endValue, 10);
  }

  _handleInput() {
    this._slider.noUiSlider.set(this._params.values);
  }
}
