for (const form of document.querySelectorAll('form')) {
  const { validableClass = '' } = form.dataset;

  if (validableClass) {
    const submitButton = form.querySelector('[type="submit"]');

    const handleSubmit = () => {
      form.classList.add(validableClass);
      submitButton.removeEventListener('click', handleSubmit);
    };

    submitButton.addEventListener('click', handleSubmit);
  }
}
