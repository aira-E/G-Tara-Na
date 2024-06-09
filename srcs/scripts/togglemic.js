function toggleAnimation(event) {
    var element = event.currentTarget.closest('.mic');
    if (!element.classList.contains('animating')) {
        element.classList.add('animating');
    } else {
        element.classList.remove('animating');
    }
}
