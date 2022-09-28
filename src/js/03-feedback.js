import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  console.log(parsedMessage);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

populateTextarea();

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);

  if (savedMessage) {
    refs.textarea.value = parsedMessage.message;
    refs.inputEmail.value = parsedMessage.email;
  }
}

function onInputEmailSubmit(evt) {
  const InputEmail = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: InputEmail }));
}


