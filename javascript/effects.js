document.querySelectorAll('.sq').forEach(Element => {
    Element.style = `
    width: var(--circle-size-1);
    height: var(--circle-size-1);
    border-radius: 0;
    margin: 0;`
});

$("#logo").mouseenter(function() {
  document.querySelectorAll('.sq').forEach(Element => {

    Element.style.animation = "circle 0.5s ease 0s forwards normal";

    Element.style = `
    width: var(--circle-size-2);
    height: var(--circle-size-2);
    border-radius: 50%;
    margin: auto;`;

  });
});

$("#logo").mouseleave(function() {
  document.querySelectorAll('.sq').forEach(Element => {

    Element.style.animation = "circle 0.5s ease 0s forwards reverse";
                      
    Element.style = `
    width: var(--circle-size-1);
    height: var(--circle-size-1);
    border-radius: 0;
    margin: 0;`

  });
});
