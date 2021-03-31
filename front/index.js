const prviNavItem = document.querySelector('.prvicItem');
const prviDescItem = document.querySelector('.prviDescItem');
const drguiNavItem = document.querySelector('.drugicItem');
const drugiDescItem = document.querySelector('.drugiDescItem');
const treciNavItem = document.querySelector('.trecicItem');
const treciDescItem = document.querySelector('.treciDescItem');
const cetvrtiNavItem = document.querySelector('.cetvrticItem');
const cetvrtiDescItem = document.querySelector('.cetvrtiDescItem');

prviDescItem.addEventListener('mouseover', () => {
    prviDescItem.classList.add("visible");
});
drugiDescItem.addEventListener('mouseover', () => {
    drugiDescItem.classList.add("visible");
});
treciDescItem.addEventListener('mouseover', () => {
    treciDescItem.classList.add("visible");
});
cetvrtiDescItem.addEventListener('mouseover', () => {
    cetvrtiDescItem.classList.add("visible");
});