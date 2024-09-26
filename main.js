const loginBtn = document.querySelector('.login');
const registerBtn = document.querySelector('.register');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

registerButton.addEventListener('click', () => {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    registerModal.style.display = 'none';
    updateUserHeader(username);
});

loginButton.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        loginModal.style.display = 'none';
        updateUserHeader(storedUser.username);
    } else {
        alert('Email ou senha incorretos.');
    }
});

function updateUserHeader(username) {
    document.querySelector('.header-buttons').innerHTML = `
    <p class="profile-text">${username}</p>
    <img class="profile-pic" src="assets/profile.png">
    `;
}

const header = document.getElementById('main-header');
let prevScrollPos = window.pageYOffset;

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
    } else {
        header.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
};