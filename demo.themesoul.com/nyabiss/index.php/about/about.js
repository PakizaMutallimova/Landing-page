const data = [
    { name: "Jessica Laris", image: "https://wfcsradio.com/wp-content/uploads/2019/08/team-member-02.jpg", position: "CEO", description: "lorem ipsum dolar sit epaonb  hbd  hs d jhsb vdv"},
    { name: "Arthur Conan", image: "https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg", position: "CTO", description: "lorem ipsum dolar sit epaonb  hbd  hs d jhsb vdv"},
    { name: "Elvis Picon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iCMKKj8lTp440PMszx6HZS6JgT8EW2nrzw&s", position: "Software Engineer", description: "lorem ipsum dolar sit epaonb  hbd  hs d jhsb vdv"},
    { name: "Michael Reon", image: "https://www.shutterstock.com/image-photo/theres-no-substitute-hard-work-260nw-2298253391.jpg", position: "Front End Developer", description: "lorem ipsum dolar sit epaonb  hbd  hs d jhsb vdv"},
    { name: "Halen Delon", image: "https://wpbeaveraddons.com/wp-content/uploads/2017/06/t1-2.png", position: "Back End Developer", description: "lorem ipsum dolar sit epaonb  hbd  hs d jhsb vdv"},
    { name: "Luis Styles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtblG84CVbfw3_AK82bl2P0ZOrz9sAiORWg&s", position: "Sales Manager", description: "lorem ipsum dolar sit vdv"},
    { name: "Halen Delon", image: "https://wpbeaveraddons.com/wp-content/uploads/2017/06/t1-2.png", position: "Back End Developer", description: "lorem ipsum dolar sit epaonb  hbd  hs d jhsb vdv"},
    { name: "Luis Styles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtblG84CVbfw3_AK82bl2P0ZOrz9sAiORWg&s", position: "Sales Manager", description: "lorem ipsum dolar sit epos"}
]


const teamMembers= (data) => {
    const team = data.map((member, index) => {
        return `
        <div class="card-m col-md-3">
            <div class="member-card  sppb-addon-wrapper addon-root-feature">
                <div id="sppb-addon-1624875349294" class="clearfix">
                    <div class="sppb-addon sppb-addon-feature">
                        <div class="sppb-addon-content">
                            <div class="sppb-media">
                                <div id="p-${index}" class="entire-card"></div>
                                <div class="pull-sppb-text-center">
                                    <span class="sppb-img-container">
                                        <img
                                            class="sppb-img-responsive"
                                            style="display: inline-block;"
                                            src="${member.image}"
                                            alt="${member.name}"
                                            data-large="/nyabiss/images/team/team4.jpg"
                                            loading="lazy"
                                        />
                                    </span>
                                </div>
                                <div class="sppb-media-body">
                                    <div class="sppb-media-content">
                                        <h3 class="sppb-addon-title sppb-feature-box-title">${member.name}</h3>
                                        <div class="sppb-addon-text">${member.position}</div>
                                        <p class="description">${member.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    })
    return team.join('')
}

const popupContainer = document.querySelector('.popup-container')
const popupOverlay = document.querySelector('.popupOverlay')
const members = document.querySelector('.members')
members.innerHTML = teamMembers(data)


window.addEventListener('click', (e) => {
    const card = e.target.closest('.entire-card')
    const popupImage = document.querySelector('img.popupImage')
    const popupH2 = document.querySelector('h2')
    const popupSpeciality = document.querySelector('p')
    const popupDescr = document.querySelector('span')
    
    if (card) {
        // const image = card.parentElement.children[1].children[0].children[0].src
        // const nameP = card.parentElement.children[2].children[0].children[0].textContent
        // const speciality = card.parentElement.children[2].children[0].children[1].textContent
        // const descr = card.parentElement.children[2].children[0].children[2].textContent
        // console.log(nameP, speciality, descr);
        popupOverlay.style.display = 'flex'
    }
    if (e.target.classList.contains('popupOverlay')) {
        popupOverlay.style.display = 'none'
    }
    const dataMember = data.map((member, index) => {
        const id = card.id.split('-')[1]
        // console.log(id);
        
        if (index === id){
            console.log(member);
            
            return`
                <div class="popupContent d-flex align-items-center row">
                    <img src="${member.image}" alt="" class="popupImage col-5" />
                    <div class="col d-flex flex-column justify-content-center">
                        <h3>${member.name}</h3>
                        <p>${member.speciality}</p>
                        <span>${member.description}</span>
                    </div>
                </div>`.join('')
            // popupH2.textContent = member.name
            // popupSpeciality.textContent = member.position
            // popupDescr.textContent = member.description
        }
    })

})


const popupFunstion = (id) => {
    
}