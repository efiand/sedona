import Modal from '../components/modal/modal.js';

export * from './modules/breakpoints.js';

for (const modal of document.querySelectorAll('.modal')) {
  new Modal(modal);
}
