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



const fname = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const company = document.getElementById('company');
const btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener('click', async () => {
    const data = {
        "fullname": fname.value,
        "companyName": company.value,
        "email": email.value,
        "phone": number.value
    }

    try {
      const response = await fetch('https://miloyapp.com/notification/api/v2/Email/Partnership', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Success:', jsonResponse);
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
})

// const data = {
//     "fullname": name.value,
//     "companyName": company.value,
//     "email": email.value,
//     "phone": number.value
// }
// // console.log(data);
// fetch('https://miloyapp.com/notification/api/v2/Email/Partnership', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     // headers: {
//     //     'Content-type': 'application/json; charset=UTF-8',
//     // },
// })
//     .then(async (response) => console.log(await response.json()))
//     .then((json) => console.log(json));

// $.post('WorkerRegistration', 
//     { request: model }, 
//     function (data) { 
        
//     });