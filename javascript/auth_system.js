const loginBox = document.getElementById('login-box');
const qsisMain = document.getElementById('main');

const showBtn = document.getElementById('view-pw');
const idFleid = document.getElementById('id-fleid');
const pwFleid = document.getElementById('pw-fleid');

idFleid.addEventListener("keypress", function(event) {if (event.key == "Enter") {pwFleid.focus()}});
pwFleid.addEventListener("keypress", function(event) {if (event.key == "Enter") {login()}});

function login() {
    $(loginBox).fadeOut(750);
    setTimeout(() => {
        $(qsisMain).fadeIn(700);
    }, 800);
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

function logout() {
    setTimeout(() => {        
        $(qsisMain).fadeOut(500);
    }, 300);
    setTimeout(() => {
        $(loginBox).fadeIn(300);
    }, 1500);
}