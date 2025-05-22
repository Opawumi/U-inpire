console.log("NextGen Tutors Homepage Loaded!");
function bookService(serviceName) {
  alert(`You selected: ${serviceName} tutoring. A consultant will contact you shortly!`);
}

// Basic form validation
function validateContactForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return false;
  }
  alert('Message sent successfully!');
  return true;
}