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

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const company = document.getElementById('company');
const btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener('click', () => {
    console.log(name.value, email.value, number.value, company.value);
})
