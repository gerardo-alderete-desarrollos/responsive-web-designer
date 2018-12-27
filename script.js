/* 
    CSSOM
    CSS Object Model 
    window.getComputedStyle(elemento).getPropertyValue() // lee los estilos de un elemento

    element.style // todo elemento del DOM tiene la propiedad style
 */

//  document.body.style.backgroundColor = 'red';
 document.body.classList.add('red');

 const color = 'red';
 const size = 2;
 const myStyle = `
    background: ${color};
    color: white;
    margin-top: 4em;
    border-bottom: ${size * 2}px solid black;
 `

 //1. Sobreescribiendo
// document.getElementById('title').setAttribute('style', myStyle);

const setStyles = (element, styles) => {
    element.setAttribute('style', styles);
}

setStyles(document.getElementById('title'), myStyle);


//2.- Agregando a los estilos inline existentes
// document.getElementById('title').style += `;${myStyle}`;