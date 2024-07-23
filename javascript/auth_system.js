const loginBox = document.getElementById('login-box');
const qsisMain = document.getElementById('main');

const showBtn = document.getElementById('view-pw');
const idFleid = document.getElementById('id-fleid');
const pwFleid = document.getElementById('pw-fleid');

idFleid.addEventListener("keypress", function(event) {if (event.key == "Enter") {pwFleid.focus()}});
pwFleid.addEventListener("keypress", function(event) {if (event.key == "Enter") {login()}});

$(qsisMain).hide();

function login() {
    
    for (var i = 0; i < allTabs.length; i++) {
        $(allTabs[i]).hide()
    }  

    $(loginBox).fadeOut(750);
    setTimeout(() => {
        $(qsisMain).fadeIn(700);
    }, 800);

    setTimeout(() => {
        showTab(1,document.querySelectorAll('li.nav-item-1')[0])
    }, 850);
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

        var FadeTab = "tab" + tabNo;

        $('#' + FadeTab).fadeOut(500);
        $(qsisMain).fadeOut(500);
        
    }, 300);
    setTimeout(() => {
        $(loginBox).fadeIn(300);
    }, 1500);
}
