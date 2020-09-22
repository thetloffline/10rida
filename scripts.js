const processForm = form => {
  const data = new FormData(form)
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    const successMsg = document.querySelector('#success-msg')
    form.classList.add("hidden")
    successMsg.classList.add("show")
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