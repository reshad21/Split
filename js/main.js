// let cmpdrpdwn = document.querySelector('#cmpdrpdwn');
// let cmpdrpdwnitem = document.querySelector('#cmpdrpdwnitem');

// cmpdrpdwns.forEach(cmpdrpdwn => {
//     cmpdrpdwn.addEventListener('click', function () {
//         cmpdrpdwnitems.forEach(cmpdrpdwnitem => {
//             cmpdrpdwnitem.classList.toggle('active');
//         })
//     })
// })

// ================campaigns page code============== //
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





