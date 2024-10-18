const video = document.getElementById('.watch-video');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('watch-video')) {
        video.play();
    }
});



const socialsData = {
    linkedin: "test",
    instagram: "",
    youtube: ""
}

console.log(socialsData[1]);
const socialIcons = document.querySelector('.social-icons');
