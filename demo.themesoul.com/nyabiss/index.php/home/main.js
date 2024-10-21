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




// const data = {
//     "fullname": "string",
//     "companyName": "string",
//     "email": "string",
//     "phone": "string"
// }

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const company = document.getElementById('company');
const btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener('click', async () => {
    const data = {
        "fullname": name.value,
        "companyName": company.value,
        "email": email.value,
        "phone": number.value
    }
    // console.log(data);
    fetch('/notification/api/v2/Email/Partnership', {
        method: 'POST',
        body: JSON.stringify(data),
        // headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        // },
    })
        .then(async (response) => console.log(await response.json()))
        .then((json) => console.log(json));
})



