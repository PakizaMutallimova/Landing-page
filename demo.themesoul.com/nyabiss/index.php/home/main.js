const video = document.getElementById('.watch-video');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('watch-video')) {
      video.muted = false;
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
      $.ajax({  
        url: 'https://miloyapp.com/notification/api/v2/Email/Partnership',  
        type: 'post',  
        data: JSON.stringify(data),  
        contentType: "application/json",  
        success: function (data) {  
            console.info(data);  
        },  
        error: function (xhr, status, error) {  
            console.error("Error:", status, error);  
        }  
    });
    } catch (error) {
      console.error('Request failed:', error);
    }
})