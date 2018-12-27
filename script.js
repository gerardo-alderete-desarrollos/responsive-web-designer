/* Media query con Javascript */

const mediumBp =matchMedia('(min-width: 800px)')
// console.log(mediumBp);

// addEventListener('resize', () => {
//     if( mediumBp.matches){
//         document.body.style.background = 'red';
//     }else {
//         document.body.style.background = 'yellow';

//     }
// })

// addEventListener('DOMContentLoaded', () => {
//     if( mediumBp.matches){
//         document.body.style.background = 'red';
//     }else {
//         document.body.style.background = 'yellow';

//     }
// })

const changeColor = mql => {
    mql.matches
        ? document.body.style.background = 'red'
        : document.body.style.background = 'yellow'
}
changeColor(mediumBp);
mediumBp.addListener(changeColor);