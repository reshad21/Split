// let cmpdrpdwn = document.querySelectorAll('#cmpdrpdwn');
// let cmpdrpdwnitem = document.querySelectorAll('#cmpdrpdwnitem');

// cmpdrpdwn.forEach(element => {
//     element.addEventListener('click',function(){
//         cmpdrpdwnitem.forEach(item => {
//             console.log(item);
//         })
//     })
// })



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





