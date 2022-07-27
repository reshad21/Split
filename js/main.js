// let cmpdrpdwn = document.querySelector('#cmpdrpdwn');
// let cmpdrpdwnitem = document.querySelector('#cmpdrpdwnitem');

// cmpdrpdwn.addEventListener('click', function (e) {
//     e.preventDefault();
//     cmpdrpdwnitem.classList.toggle('active');
// })



let cmpdrpdwns = document.querySelectorAll('#cmpdrpdwn');
let cmpdrpdwnitems = document.querySelectorAll('#cmpdrpdwnitem');

cmpdrpdwns.forEach(cmpdrpdwn => {
    cmpdrpdwn.addEventListener('click', function () {
        cmpdrpdwnitems.forEach(cmpdrpdwnitem => {
            cmpdrpdwnitem.classList.toggle('active');
        })
    })
})