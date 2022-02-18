import FormGroup from './form-group.js';

export default class FormGroupWithCounter extends FormGroup {
  constructor(group) {
    super(group);

    this._increaser = this._group.querySelector('.form-button-step-up');
    this._decreaser = this._group.querySelector('.form-button-step-down');

    this._initCounters();
  }

  get _params() {
    const min = parseInt(this._field.min, 10);
    const max = parseInt(this._field.max, 10);
    const value = parseInt(this._field.value, 10);

    return {
      min,
      max,
      value
    };
  }

  _initCounters() {
    this._handleStepDown = this._handleStepDown.bind(this);
    this._decreaser.addEventListener('click', this._handleStepDown);

    this._handleStepUp = this._handleStepUp.bind(this);
    this._increaser.addEventListener('click', this._handleStepUp);

    this._handleInput = this._handleInput.bind(this);
    this._field.addEventListener('input', this._handleInput);
  }

  _handleInput() {
    const { min, max, value } = this._params;
    let disableIncrease = false;
    let disableDecrease = false;

    if (value >= max) {
      this._field.value = max;
      disableIncrease = true;
    } else if (value <= min) {
      this._field.value = min;
      disableDecrease = true;
    }

    this._decreaser.disabled = disableDecrease;
    this._increaser.disabled = disableIncrease;
  }

  _handleStepUp() {
    this._field.stepUp();
    this._handleInput();
  }

  _handleStepDown() {
    this._field.stepDown();
    this._handleInput();
  }
}
