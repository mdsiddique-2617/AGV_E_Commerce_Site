// Responsive Navbar

document.addEventListener('DOMContentLoaded', () => {
    const leftNavButton = document.querySelector('.md-linksiconleft');
    const links1 = document.querySelector('.md-links1');

    if (leftNavButton && links1) {
        leftNavButton.addEventListener('click', () => {
            links1.classList.toggle('md-links1js');
            leftNavButton.classList.toggle('rotatelefticon');
        });
    } else {
        console.error('Elements not found');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const rightNavButton = document.querySelector('.md-linksiconright');
    const links2 = document.querySelector('.md-links2');

    if (rightNavButton && links2) {
        rightNavButton.addEventListener('click', () => {
            links2.classList.toggle('md-links2js');
            rightNavButton.classList.toggle('rotaterighticon');
        });
    } else {
        console.error('Elements not found');
    }
});

//Products Rotate

let buttonleft = document.getElementById('leftbutton');
let buttonright = document.getElementById('rightbutton');
let products = document.getElementsByClassName('md-productimages')[0];
let product1 = document.getElementsByClassName('product-1')[0];
let product2 = document.getElementsByClassName('product-2')[0];
let product3 = document.getElementsByClassName('product-3')[0];
let product4 = document.getElementsByClassName('product-4')[0];
product2.style.opacity = 0;
product3.style.opacity = 0;
product4.style.opacity = 0;

let productcount = 1;
let rotatedeg = 0;

buttonleft.disabled = true;
buttonleft.style.opacity = 0.5;

function rotateleft(){
    if(rotatedeg >= -90){
        buttonleft.disabled = true;
        buttonleft.style.opacity = 0.5;
        }
        buttonright.disabled = false;
        buttonright.style.opacity = 1;
        rotatedeg = rotatedeg + 90;
        products.style = `transform: rotate(${rotatedeg}deg)`;
        productcount--;
    switch(productcount){
        case 1:
            product1.style.opacity = 1;
            product2.style.opacity = 0;
            product3.style.opacity = 0;
            product4.style.opacity = 0;
            break;

        case 2:
            product1.style.opacity = 0;
            product2.style.opacity = 1;
            product3.style.opacity = 0;
            product4.style.opacity = 0;
            break;

        case 3:
            product1.style.opacity = 0;
            product2.style.opacity = 0;
            product3.style.opacity = 1;
            product4.style.opacity = 0;
            break;

        case 4:
            product1.style.opacity = 0;
            product2.style.opacity = 0;
            product3.style.opacity = 0;
            product4.style.opacity = 1;
            break;
    }
}

function rotateright(){
    rotatedeg = rotatedeg - 90;
    products.style = `transform: rotate(${rotatedeg}deg)`;
    buttonleft.disabled = false;
    buttonleft.style.opacity = 1;
    if(rotatedeg <= -270){
    buttonright.disabled = true;
    buttonright.style.opacity = 0.5;
}
    productcount++;
    switch(productcount){
        case 1:
            product1.style.opacity = 1;
            product2.style.opacity = 0;
            product3.style.opacity = 0;
            product4.style.opacity = 0;
            break;

        case 2:
            product1.style.opacity = 0;
            product2.style.opacity = 1;
            product3.style.opacity = 0;
            product4.style.opacity = 0;
            break;

        case 3:
            product1.style.opacity = 0;
            product2.style.opacity = 0;
            product3.style.opacity = 1;
            product4.style.opacity = 0;
            break;

        case 4:
            product1.style.opacity = 0;
            product2.style.opacity = 0;
            product3.style.opacity = 0;
            product4.style.opacity = 1;
            break;
    }
}
