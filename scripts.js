const processForm = form => {
  const data = new FormData(form)
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = `<div class="success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
  })
  .catch(error => {
    form.innerHTML = `<div class="error">Error: ${error}</div>`;
  })
}

const emailForm = document.querySelector('#cards-feedback')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}