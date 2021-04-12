function parallax(event) {
    this.querySelectorAll('.parallax__layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        console.log(layer.getAttribute('data-speed'));
        layer.style.transform = `translate(${event.clientX*speed/2000}px, ${event.clientY*speed/2000}px)`
    });
}

document.addEventListener('mousemove', parallax);