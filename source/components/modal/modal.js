const FOCUSABLES = [
  'a[href]',
  'button:not(:disabled)',
  'input:not(:disabled)',
  'textarea:not(:disabled)',
  'select:not(:disabled)',
  '[tabindex]:not([tabindex^="-"])'
].join(', ');

export default class Modal {
  constructor(el) {
    this._el = el;
    this._id = this._el.dataset.modal;
    this._opener = document.querySelector(`[data-modal=${this._id}]`);
    this._closer = this._el.querySelector('.modal-closer');
    this._allFocusables = [];

    this._setListeners();

    this._el.classList.add('modal-ready');
  }

  get _firstFocusable() {
    const [firstFocusable] = this._el.querySelectorAll(FOCUSABLES);
    return firstFocusable;
  }

  _setListeners() {
    this._handleOpen = this._handleOpen.bind(this);
    this._handleBtnClose = this._handleBtnClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._handleKeyClose = this._handleKeyClose.bind(this);
    this._handleFocus = this._handleFocus.bind(this);

    this._opener.addEventListener('click', this._handleOpen);
    this._el.addEventListener('click', this._handleOverlayClose);
    this._closer.addEventListener('click', this._handleBtnClose);
  }

  _open() {
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.marginRight = 'var(--scrollbar-width)';
    document.addEventListener('keydown', this._handleKeyClose);

    this._focusables = document.querySelectorAll(FOCUSABLES);
    for (const focusableEl of this._focusables) {
      focusableEl.addEventListener('focus', this._handleFocus);
    }

    this._el.classList.add('modal-opened');
  }

  _close() {
    this._el.classList.remove('modal-opened');

    document.removeEventListener('keydown', this._handleKeyClose);
    document.documentElement.style.marginRight = '0';
    document.documentElement.style.overflow = 'auto';

    for (const focusableEl of this._focusables) {
      focusableEl.removeEventListener('focus', this._handleFocus);
    }
  }

  _handleOpen(evt) {
    evt.preventDefault();
    this._open();
  }

  _handleBtnClose(evt) {
    evt.preventDefault();
    this._close();
  }

  _handleOverlayClose(evt) {
    if (evt.target === this._el) {
      this._close();
    }
  }

  _handleKeyClose(evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      this._close();
    }
  }

  _handleFocus() {
    if (document.activeElement.closest('.modal') !== this._el) {
      this._firstFocusable.focus();
    }
  }
}
