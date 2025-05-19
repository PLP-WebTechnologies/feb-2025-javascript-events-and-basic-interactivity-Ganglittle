const toggleBtn = document.getElementById('toggleBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('contactForm');


function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}


let pressTimer;
toggleBtn.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
    alert('🎉 Surprise!');
    }, 1000);
});
toggleBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
toggleBtn.addEventListener('dblclick', () => alert('🎉 Secret Unlocked!'));


email.addEventListener('input', () => {
    email.setCustomValidity(email.validity.typeMismatch ? 'Enter a valid email' : '');
});

password.addEventListener('input', () => {
    password.setCustomValidity(password.value.length < 8 ? 'Password must be at least 8 characters' : '');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome to the family!');
});