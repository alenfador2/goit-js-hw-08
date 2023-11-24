import throttle from 'lodash.throttle';

const input = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const currentEmail = document.querySelector('input[type="email"]');
const currentMessage = document.querySelector('textarea');
const formData = JSON.parse(localStorage.getItem(storageKey));

const setStorage = throttle(() => {
  const form = {
    email: input.elements.email.value,
    message: input.elements.message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(form));
}, 500);

input.addEventListener('input', setStorage);

if (localStorage.getItem(storageKey)) {
  currentEmail.value = formData.email;
  currentMessage.value = formData.message;
}

input.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('formData:', formData);
  localStorage.removeItem(storageKey);
  input.reset();
});
