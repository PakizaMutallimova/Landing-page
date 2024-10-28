const data = [
    { name: "Jessica Laris", image: "https://wfcsradio.com/wp-content/uploads/2019/08/team-member-02.jpg", position: "CEO", description: "She is a CEO at Miloy. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae"},
    { name: "Arthur Conan", image: "https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg", position: "CTO", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"},
    { name: "Elvis Picon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iCMKKj8lTp440PMszx6HZS6JgT8EW2nrzw&s", position: "Software Engineer", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"},
    { name: "Michael Reon", image: "https://www.shutterstock.com/image-photo/theres-no-substitute-hard-work-260nw-2298253391.jpg", position: "Front End Developer", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"},
    { name: "Halen Delon", image: "https://wpbeaveraddons.com/wp-content/uploads/2017/06/t1-2.png", position: "Back End Developer", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"},
    { name: "Luis Styles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtblG84CVbfw3_AK82bl2P0ZOrz9sAiORWg&s", position: "Sales Manager", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"},
    { name: "Halen Delon", image: "https://wpbeaveraddons.com/wp-content/uploads/2017/06/t1-2.png", position: "Back End Developer", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"},
    { name: "Luis Styles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtblG84CVbfw3_AK82bl2P0ZOrz9sAiORWg&s", position: "Sales Manager", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam, placeat fugiat itaque minima quas natus optio dolore, recusandae iure delectus magnam non temporibus eum quos, obcaecati accusamus perferendis vitae?"}
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
members.innerHTML = teamMembers(data)
// ----------------------- popup team member ------------------------
const popupContainer = document.querySelector('.popup-container')
const popupOverlay = document.querySelector('.popupOverlay')
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popupOverlay')) {
        popupOverlay.style.display = 'none'
    }
})

const popupFunction = (id) => {
    console.log(id);
    const popupImage = document.querySelector('img.popupImage')
    const popupH2 = document.querySelector('h2.popupH2');
    const popupSpeciality = document.querySelector('p.popupSpeciality');
    const popupDescr = document.querySelector('span.popupDescr');
    const member = data[id]
    popupImage.src = member.image
    popupH2.innerText = member.name
    popupSpeciality.textContent = member.position
    popupDescr.textContent = member.description
    popupOverlay.style.display = 'flex'
}

// -----------------------  ------------------------