let submitted=false
function onSubmitted() {
    submitted ? alert('Your message has been sent. Thank you!') : ''
  }
  
const form = document.querySelector('.email-form');//
const username = document.querySelector('.name');//
const email = document.querySelector('.email');//
// const subject = document.getElementById('subject');
// const Message = document.getElementById('Message');
const errorElement = document.querySelector('.error-message');
let set=false

form.addEventListener('submit', e => {
    if(set)e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespace
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
 

  if (usernameValue === '') {
    errorElement.innerHTML = 'Username cannot be blank';
    setErrorFor();
  } else {
    setSuccessFor();
  }

  if (emailValue === '') {
    errorElement.innerHTML = 'Email cannot be blank';
    setErrorFor();
  } else if (!isEmail(emailValue)) {
    errorElement.innerHTML = 'Not a valid email';
    setErrorFor();
} else {
    errorElement.innerHTML = 'form-control success';
    setSuccessFor();
  }
}

function setErrorFor() {
 errorElement.style.display="block"
 errorElement.style.background="red"
 set=false
}

function setSuccessFor() {
    errorElement.style.display="block"
    errorElement.style.background="green"
    set=true
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}