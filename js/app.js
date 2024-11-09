// Function to change background color of left side
function changeBgColor() {
    const leftside = document.querySelector(".left");
    const bgcolorInput = document.querySelector("#bgcolor");
    const textcolorInput = document.querySelector("#textcolor");
    if (leftside) {
        leftside.style.backgroundColor = bgcolorInput.value;
        leftside.style.color = textcolorInput.value;
    }
}
function fullpageColor() {
    const resumePage = document.getElementById("resume");
    const bgcolorInput = document.querySelector("#fpbgcolor");
    const textcolorInput = document.querySelector("#fptextcolor");
    if (resumePage) {
        resumePage.style.backgroundColor = bgcolorInput.value;
        resumePage.style.color = textcolorInput.value;
    }
}
// Function to change background color of right side
function changeColor() {
    const rightside = document.querySelector(".right");
    const rightBgColorInput = document.querySelector("#r-bgcolor");
    const rightTextColorInput = document.querySelector("#r-textcolor");
    if (rightside) {
        rightside.style.backgroundColor = rightBgColorInput.value;
        rightside.style.color = rightTextColorInput.value;
    }
}
// Event listeners for color change
document.querySelector("#bgcolor")?.addEventListener("change", changeBgColor);
document.querySelector("#textcolor")?.addEventListener("change", changeBgColor);
document.querySelector("#r-bgcolor")?.addEventListener("change", changeColor);
document.querySelector("#r-textcolor")?.addEventListener("change", changeColor);
document.querySelector("#fpbgcolor")?.addEventListener("change", fullpageColor);
document
    .querySelector("#fptextcolor")
    ?.addEventListener("change", fullpageColor);
// Function to form submission
function formSubmit(evt) {
    evt.preventDefault();
    let fNameElem = document.getElementById("fname");
    let contactElem = document.getElementById("contact");
    let emailElem = document.getElementById("email");
    let addressElem = document.getElementById("address");
    let yearElem = document.getElementById("year");
    let fieldElem = document.getElementById("field");
    let instituteElem = document.getElementById("institute");
    let jobElem = document.getElementById("job");
    let compElem = document.getElementById("comp");
    let sdateElem = document.getElementById("sdate");
    let edateElem = document.getElementById("edate");
    let skillElem = document.getElementById("skill");
    let objectiveElem = document.getElementById("objective");
    let picElem = document.getElementById("profile-pic");
    let languageElem = document.getElementById("language");
    let professionElem = document.getElementById("profession");
    let gradeElem = document.getElementById("grade");
    let workElem = document.getElementById("work");
    if (!fNameElem ||
        !contactElem ||
        !emailElem ||
        !addressElem ||
        !yearElem ||
        !fieldElem ||
        !instituteElem ||
        !jobElem ||
        !compElem ||
        !sdateElem ||
        !edateElem ||
        !skillElem ||
        !objectiveElem ||
        !picElem ||
        !languageElem ||
        !workElem ||
        !professionElem) {
        console.error("Elements are missing");
        return;
    }
    const fName = fNameElem.value;
    const contact = contactElem.value;
    const email = emailElem.value;
    const address = addressElem.value;
    const year = yearElem.value;
    const field = fieldElem.value;
    const institute = instituteElem.value;
    const job = jobElem.value;
    const comp = compElem.value;
    const sdate = sdateElem.value;
    const edate = edateElem.value;
    const skill = skillElem.value;
    const objective = objectiveElem.value;
    const language = languageElem.value;
    const profession = professionElem.value;
    const grade = gradeElem.value;
    const work = workElem.value;
    const profPic = picElem.files?.[0];
    const profPicURL = profPic ? URL.createObjectURL(profPic) : "";
    let resumeOutput = `
  <div class="left">
  <p>Dynamic Resume Builder</p>
  <div class="resume-head smallScreen">
    <h1 class="name editable">${fName}</h1>
    <p class="designation editable">${profession}</p>
  </div>
  <div class="resume-logo">
    ${profPicURL ? `<img src="${profPicURL}" alt="logo">` : ""}
  </div>
  <div class="resume-left-info">
    <div class="contact-info mobScreen">
      <h1>Contact Me</h1>
      <div class="contact-me">
        <i class="fas fa-phone contact-icon"></i>
        <p class = "editable">${contact}</p>
      </div>
      <div class="contact-me">
        <i class="fas fa-envelope contact-icon"></i>
        <p class = "editable">${email}</p>
      </div>
      <div class="contact-me">
        <i class="fas fa-location-dot contact-icon"></i>
        <p class = "editable">
          ${address}
        </p>
      </div>
    </div>
    <h1>Objective</h1>
    <p class="object-para editable">
    ${objective}
    </p>

    <div class="contact-info webScreen">
      <h1>Contact Me</h1>
      <div class="contact-me">
        <i class="fas fa-phone contact-icon"></i>
        <p class = "editable">${contact}</p>
      </div>
      <div class="contact-me">
        <i class="fas fa-envelope contact-icon"></i>
        <p class = "editable">${email}</p>
      </div>
      <div class="contact-me">
        <i class="fas fa-location-dot contact-icon"></i>
        <p class = "editable">
        ${address}
        </p>
      </div>
    </div>
    <div class="language webScreen">
      <h1>Language</h1>
      <p class = "editable">${language}</p>
    </div>
  </div>
</div>
<div class="right">
  <div class="resume-head webScreen">
    <h1 class="name editable">${fName}</h1>
    <p class="designation editable">${profession}</p>
  </div>
  <div class="professional-info">
    <div class="resume-education prof-info">
      <h1>Education</h1>
      <p class = "editable">${year}</p>
      <h2 class = "editable">${institute}</h2>
      <h3 class = "editable">${field}</h3>
      <p class = "editable">${grade}</p>
    </div>
    <div class="resume-experience prof-info">
      <h1>Experience</h1>
      <p class = "editable">${sdate} - ${edate}</p>
      <h2 class = "editable">${job}</h2>
      <h3 class = "editable">${comp}</h3>
      <ul>
        <li class="work editable">
          ${work}
        </li>
      </ul>
    </div>
    <div class="resume-skill prof-info">
      <h1>Skills</h1>

      <h2 class = "editable">${skill}</h2>
    </div>
    <div class="language mobScreen">
      <h1>Language</h1>
      <p class = "editable">${language}</p>
    </div>
  </div>
</div>
    `;
    let resumeOutputElem = document.getElementById("resume");
    if (resumeOutputElem) {
        let editSec = document.querySelector(".edit-sec");
        resumeOutputElem.innerHTML = resumeOutput;
        resumeOutputElem.style.border = "5px double black";
        editSec.style.display = "flex";
    }
    else {
        console.error("The resume output element is missing");
    }
}
// Changing  Edit to Save mde  and Save to edit mode modes
function editBtn() {
    let editbtn = document.querySelector(".editBtn");
    if (!editbtn)
        return;
    let editableElem = document.querySelectorAll(".editable");
    if (editbtn.innerText === "Edit") {
        // change into edit
        editableElem.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editbtn.innerText = "Save";
    }
    else {
        // change again  into save
        editableElem.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editbtn.innerText = "Edit";
    }
}
// applying event listeners
function formSubmitDone() {
    let form = document.getElementById("resumeForm");
    let editbtn = document.querySelector(".editBtn");
    if (form) {
        form.addEventListener("submit", formSubmit);
    }
    if (editbtn) {
        editbtn.addEventListener("click", editBtn);
    }
}
formSubmitDone();

