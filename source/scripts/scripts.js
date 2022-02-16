import Modal from '../components/modal/modal.js';
import Range from '../components/range/range.js';

export * from './modules/breakpoints.js';
export * from './modules/set-validity.js';

// Открываем все контролы, бессмысленные без наличия JS
for (const noJsHiddenEl of document.querySelectorAll('.no-js-hidden')) {
  noJsHiddenEl.classList.remove('no-js-hidden');
}

for (const modalEl of document.querySelectorAll('.modal')) {
  new Modal(modalEl);
}

for (const rangeEl of document.querySelectorAll('.range')) {
  new Range(rangeEl);
}
