function parallax(event) {
    this.querySelectorAll('.parallax__layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translate(${event.clientX*speed/800}px)`
    });
}

document.addEventListener('mousemove', parallax);