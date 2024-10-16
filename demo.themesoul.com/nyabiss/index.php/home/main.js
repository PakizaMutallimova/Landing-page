const video = document.getElementById('.watch-video');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('watch-video')) {
        video.play();
    }
});