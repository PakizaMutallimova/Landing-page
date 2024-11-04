const ourTeam = [
    { name: 'Shahmar Hasanov', position: 'CEO', image: '../../images/team/sahmar.jpg', linkedin: '', description: '' },
    { name: 'Abdulla Abdullayev', position: 'CTO', image: '../../images/team/abdulla.png', linkedin: '', description: '' },
    { name: 'Murad Abdullayev', position: 'CPO', image: '../../images/team/murad.png', linkedin: '', description: '' },
    { name: 'Nasimi Gunduzlu', position: 'Flutter Developer', image: '../../images/team/nasimi.png', linkedin: '', description: '' },
    { name: 'Shahmar Aghayev', position: 'Mobile Developer', image: '../../images/team/sahmar_dev.png', linkedin: '', description: '' },
    { name: 'Pakiza Mutallimova', position: 'Frontend Developer', image: '../../images/team/', linkedin: '', description: '' },
    { name: 'Orkhan Huseynov', position: 'Sales Manager', image: '../../images/team/', linkedin: '', description: '' },
]


// ----------------------- team members ------------------------
const teamMembers= (data) => {
    const team = data.map((member, index) => {
        return `
        <div class="card-m col-md-3">
            <div class="member-card  sppb-addon-wrapper addon-root-feature">
                <div id="sppb-addon-1624875349294" class="clearfix">
                    <div class="sppb-addon sppb-addon-feature">
                        <div class="sppb-addon-content">
                            <div class="sppb-media">
                                <div id="p-${index}" class="entire-card" onclick="popupFunction(${index})"></div>
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
                                        <div  class="sppb-addon-text">${member.position}</div>
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

const members = document.querySelector('.members')
members.innerHTML = teamMembers(ourTeam)
// ----------------------- popup team member ------------------------
const popupContainer = document.querySelector('.popup-container')
const popupOverlay = document.querySelector('.popupOverlay')
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popupOverlay')) {
        popupOverlay.style.display = 'none'
    }
})

const popupFunction = (id) => {
    const popupImage = document.querySelector('img.popupImage')
    const popupH2 = document.querySelector('h2.popupH2');
    const popupSpeciality = document.querySelector('p.popupSpeciality');
    const popupDescr = document.querySelector('span.popupDescr');
    const member = ourTeam[id]
    popupImage.src = member.image
    popupH2.innerText = member.name
    popupSpeciality.textContent = member.position
    popupDescr.textContent = member.description
    popupOverlay.style.display = 'flex'
}

// -----------------------------------------------