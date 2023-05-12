

const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const submit_now = document.querySelector('.submit_now');

submit_now.addEventListener('click', function(e) {
  
  const email_value = email.value;
  const subject_value = subject.value;
  const message_value = message.value;

  localStorage.setItem('email', email_value);
  localStorage.setItem('subject', subject_value);
  localStorage.setItem('message', message_value);
 
e.preventDefault()
});
// localStorage.clear();