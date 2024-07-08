//----------------------------responsive-nav-code----------------------------------
let three = document.querySelector('#three');
let cross = document.querySelector('#cross');
let ul_data = document.querySelector('#ul_data');

three.addEventListener("click", function () {
    three.classList.toggle('cross');
    cross.classList.remove('cross');
    cross.classList.toggle('three_line');
    ul_data.classList.remove('ul_data');
    ul_data.classList.toggle('ul_display');
});

cross.addEventListener("click", function () {
    three.classList.toggle('cross');
    cross.classList.add('cross');
    cross.classList.toggle('three_line');
    ul_data.classList.add('ul_data');
    ul_data.classList.toggle('ul_display');
});
//----------------------------responsive-nav-code---------------------------------

//---------------------------the code of h1 changer is below.----------------------
let bold_text = document.querySelector('#changer');
let string = "Full Stack Web Developer";
bold_text.style.color = "blue";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function appending() {
    bold_text.innerText = ""; // Clear the text before starting the animation
    for (let i = 0; i < string.length; i++) {
        bold_text.innerText += (string[i] + "|");
        await sleep(200); // Pause for 7 seconds
        bold_text.innerText = bold_text.innerText.replace("|", "")
    }
    await sleep(1000); // Pause for 1 second before restarting
    appending(); // Restart the animation
}

document.addEventListener('DOMContentLoaded', appending);
//--------------the code of h1 changer is below.-----------------------------------------------

//---------------------------scroll-by-button-code---------------------------------------------
let about = document.querySelector('#about');
about.addEventListener("click", (e) => {
    let scrollDistance = window.innerWidth < 701 ? 750 : 500;
    window.scrollBy({
        top: scrollDistance,
        left: 0,
        behavior: 'smooth'
    })
});

let skills = document.querySelector('#skills');
skills.addEventListener("click", (e) => {
    let scrollDistance = window.innerWidth < 701 ? 1200 : 800;
    window.scrollBy({
        top: scrollDistance,
        left: 0,
        behavior: 'smooth'
    })
});


let projects = document.querySelector('#projects');
projects.addEventListener("click", (e) => {
    let scrollDistance = window.innerWidth < 701 ? 1850 : 1200;
    window.scrollBy({
        top: scrollDistance,
        left: 0,
        behavior: 'smooth'
    })
});


let resume = document.querySelector('#resume');
resume.addEventListener("click", (e) => {
    let scrollDistance = window.innerWidth < 701 ? 5200 : 2700;
    window.scrollBy({
        top: scrollDistance,
        left: 0,
        behavior: 'smooth'
    })
});


let contact = document.querySelector('#contact');
contact.addEventListener("click", (e) => {
    let scrollDistance = window.innerWidth < 701 ? 7000 : 7000;
    window.scrollBy({
        top: scrollDistance,
        left: 0,
        behavior: 'smooth'
    })
});
//-------------------------------------scroll-by-button-code-----------------------------------------


