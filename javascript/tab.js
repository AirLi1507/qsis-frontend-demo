// function showTab(tab) {
//     var tabDivNo = "tab-div" + tab;
//     var tabNo = "tab" + tab;
//     document.getElementById(tabNo).style.color = '--var(--active-color)';
//     console.log(tabNo);
// }

// $(document).ready(function() {
//     $("#tab1").click(function(){console.log($(".nav-item-1").data("tab"))})
// })

const allTabs = document.querySelectorAll('.tabs');
const allBtns = document.querySelectorAll('.nav-item-1');

for (var i = 0; i < allTabs.length; i++) {
    $(allTabs[i]).fadeOut(0)
}

var tabNo = 0;

function showTab(tab, btn) {
    var currentTab = "tab" + tab;
    var tabNo = tab;

    for (var i = 0; i < allTabs.length; i++) {
        if (allTabs[i].id === currentTab) {
            $(allTabs[i]).fadeIn(300);
        } else {
            $(allTabs[i]).css('display','none');
        }
    }
    
    allBtns.forEach(Element => {
        Element.style.color = "var(--acsent-color-2)";
        Element.style.textShadow = "var(--text-shadow-1)";
        Element.firstChild.style.color = "var(--acsent-color-2)";
    });
    btn.firstChild.style.color = "var(--active-color)";
    btn.style.textShadow = "var(--text-shadow-2)";
    btn.style.color = "var(--active-color)";
}

// document.addEventListener("mouseclick", function() {

//     var currentTab = "tab" + tab;

//     for (var i = 0; i < allTabs.length; i++) {
//         $(allTabs[i]).fadeOut(251)
//     }

//     setTimeout(() => {
//         $(document.getElementById(currentTab)).fadeIn(260)
//     }, 250);

// })