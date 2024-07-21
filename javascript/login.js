const loginBox = document.getElementById('login-box');
const qsisMain = document.getElementById('main');

const showBtn = document.getElementById('view-pw');
const pwFleid = document.getElementById('pw-fleid');

function login() {
    loginBox.classList.add('fade-out');
    setTimeout(() => {
        loginBox.style.display = "none";
    }, 1000);
    setTimeout(() => {
        qsisMain.style.display = "flex";
        qsisMain.classList.add('fade-in');
        qsisMain.style.backdropFilter = "blur(1.4vh)";
    }, 1050);
}

function showPw() {
    showBtn.innerHTML = "visibility_off";
    showBtn.setAttribute('onclick','hidePw()');
    pwFleid.setAttribute('type','text');
}

function hidePw() {
    showBtn.innerHTML = "visibility";
    showBtn.setAttribute('onclick','showPw()');
    pwFleid.setAttribute('type','password');
}