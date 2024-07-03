const typing = document.getElementById("typing");

let i = 0;
var txt1 = 'Re-designed';
var txt2 = 'Modern';
var txt3 = 'Innovative';

var speed = 75;


function nextTxt() {
  if (currentTxt === 1) {
    currentTxt = 2;
  } else if (currentTxt === 2) {
    currentTxt = 3;
  } else if (currentTxt  === 3) {
    currentTxt = 1;
  }
}

function typingTxt() {

  if (i < txt1.length) {
    typing.innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typingTxt, speed);
  } else {
    setTimeout(deleteTxt, 3000);
    setTimeout(typingTxt1, 6000);
  }
  }


function typingTxt1() {

  if (i < txt2.length) {
    typing.innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typingTxt1, speed);
  } else {
    setTimeout(deleteTxt, 3000);
    setTimeout(typingTxt2, 6000);
  }
  }



function typingTxt2() {

  if (i < txt3.length) {
    typing.innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typingTxt2, speed);
  } else {
    setTimeout(deleteTxt, 3000);
    setTimeout(typingTxt, 6000);
  }
  }


  
function deleteTxt() {
  if (i >= 0) {
    typing.innerHTML = typing.innerHTML.substring(0, i);
    i--;
    setTimeout(deleteTxt, speed);
  }
}

window.onload = typingTxt()