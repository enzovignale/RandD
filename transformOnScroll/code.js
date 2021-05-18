const SkewedOne = document.querySelector('.skewedOne'),
    SkewedTwo = document.querySelector('.skewedTwo');
let value1,value2;

window.addEventListener('scroll',()=>{
    value1 = -15 + window.scrollY/45;
    value2 = 15 + window.scrollY/-45;
    SkewedOne.style.transform = `skewY(${value1}deg)`;
    SkewedTwo.style.transform = `skewY(${value2}deg)`;
});