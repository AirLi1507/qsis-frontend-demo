const squares = document.querySelectorAll('.sq');

squares.forEach(Element => {
    Element.style = `
    width: var(--circle-size-1);
    height: var(--circle-size-1);
    border-radius: 0;
    margin: 0;`
})

document.addEventListener("mouseover", function(e) {
  const hovering = e.target.id === 'logo' || e.target.closest('#logo');

  if (hovering) {
      squares.forEach(Element => {

        Element.style.animation = "circle 0.5s ease 0s forwards normal";

        Element.style = `
        width: var(--circle-size-2);
        height: var(--circle-size-2);
        border-radius: 50%;
        margin: auto;`;

      });
  }

});

document.addEventListener("mouseout", function(e) {
  const unhovered = e.target.id === 'logo' || e.target.closest('#logo');

  if (unhovered) {
      squares.forEach(Element => {

        Element.style.animation = "circle 0.5s ease 0s forwards reverse";
                      
        Element.style = `
        width: var(--circle-size-1);
        height: var(--circle-size-1);
        border-radius: 0;
        margin: 0;`

      });
  }

});