import Form from '../components/form/form.js';
import Modal from '../components/modal/modal.js';
import Range from '../components/range/range.js';
import Catalog from '../components/catalog/catalog.js';

export * from './modules/breakpoints.js';
export * from './modules/set-validity.js';

// Открываем все контролы, бессмысленные без наличия JS
for (const noJsHiddenEl of document.querySelectorAll('.no-js-hidden')) {
  noJsHiddenEl.classList.remove('no-js-hidden');
}

for (const formEl of document.querySelectorAll('.form')) {
  new Form(formEl);
}

for (const modalEl of document.querySelectorAll('.modal')) {
  new Modal(modalEl);
}

for (const catalogEl of document.querySelectorAll('.catalog')) {
  const ranges = [];
  for (const rangeEl of document.querySelectorAll('.range')) {
    ranges.push(new Range(rangeEl));
  }

  new Catalog(catalogEl, ranges);
}
