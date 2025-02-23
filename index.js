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