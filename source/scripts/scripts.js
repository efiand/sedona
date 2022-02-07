import Modal from '../components/modal/modal.js';

export * from './modules/breakpoints.js';

// Открываем все контролы, бессмысленные без наличия JS
for (const noJsHiddenElement of document.querySelectorAll('.no-js-hidden')) {
  noJsHiddenElement.classList.remove('no-js-hidden');
}

for (const modalElement of document.querySelectorAll('.modal')) {
  new Modal(modalElement);
}
