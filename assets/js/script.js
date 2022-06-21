const buttons = document.querySelectorAll('.magnetic__container');
const timeOut = '150';
buttons.forEach((button) => {
    button.addEventListener('mouseenter', start);
    button.addEventListener('mousemove', move);
    button.addEventListener('mouseleave', end);
});

function start($event) {
    startAnimation($event);
    endAnimation($event);

}

function move($event) {
    const x = $event.layerX - ($event.target.clientWidth / 2);
    const y = $event.layerY - ($event.target.clientHeight / 2);
    const {background, element} = getChildren($event);

    background.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
    element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
}

function end($event) {
    const {background, element} = getChildren($event);

    startAnimation($event);

    background.style.transform = `translate(0, 0)`;
    element.style.transform = `translate(0, 0)`;

    endAnimation($event);

}

function startAnimation($event) {
    const {background, element} = getChildren($event);
    const transitionStyle = `all ${timeOut}ms ease`;
    background.style.transition = transitionStyle;
    element.style.transition = transitionStyle;
}

function endAnimation($event) {
    const {background, element} = getChildren($event);
    setTimeout(() => {
        background.style.transition = '';
        element.style.transition = '';
    }, timeOut);
}

function getChildren($event) {
    return {
        background: $event.target.querySelector('.magnetic__bg'),
        element: $event.target.querySelector('.magnetic__element')
    }
}