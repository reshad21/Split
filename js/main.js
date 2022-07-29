
// ===============campaigns page code============== //
function campaigns(){
    let cmpdrpdwns = document.querySelectorAll('#cmpdrpdwn');
    let cmpdrpdwnitems = document.querySelectorAll('#cmpdrpdwnitem');
    for (let i = 0; i < cmpdrpdwns.length; i++) {
        const element = cmpdrpdwns[i];
        element.addEventListener('click',function(){
            cmpdrpdwnitems[i].classList.toggle('active');
        });
    }
}
campaigns();

// ===============Publisherdashbord page code============== //
let toggleSection = document.querySelector('#toggle-section');
let toggleIcon = document.querySelector('#toggle-icon');
let logoSec = document.querySelector('.logo-sec');

let clpsstore = document.querySelector('#clps-store');
let mainstore = document.querySelector('#main-store');

let mainstoretwo = document.querySelector('#main-store-2');
let clpsstoretwo = document.querySelector('#clps-store-2');

toggleIcon.addEventListener('click',function(e){
    e.preventDefault();
    toggleSection.classList.toggle('active');
    logoSec.classList.toggle('active');
    toggleIcon.classList.toggle('active');
    clpsstore.classList.toggle('collaps');
    mainstore.classList.toggle('active');

    clpsstoretwo.classList.toggle('collaps');
    mainstoretwo.classList.toggle('active');
   
})











