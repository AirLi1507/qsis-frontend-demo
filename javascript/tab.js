const allTabs = document.querySelectorAll('.tabs');
const allBtns = document.querySelectorAll('.nav-item-1');

for (var i = 0; i < allTabs.length; i++) {
    $(allTabs[i]).fadeOut(1);
}

$('#sidebar').fadeOut(1);

var tabNo = 0;

function showTab(tab, btn) {
    var currentTab = "tab" + tab;
    tabNo = tab;

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
