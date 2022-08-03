// hourly dropdown code
let hourly = document.querySelector('#hourly');
let hourly_dp = document.querySelector('#hourly_dp');
let hrlyinput = document.querySelector('#hrlyinput');
hourly.addEventListener('click', function () {
    hourly_dp.classList.toggle('active');
})
function show(data) {
    hrlyinput.value = data;
}


// campagins dropdown code
let Campaigns = document.querySelector('#Campaigns');
let Camp_dp = document.querySelector('#Camp_dp');
let Campinput = document.querySelector('#Campinput');

Campaigns.addEventListener('click', function () {
    Camp_dp.classList.toggle('active');
})
function camp(data) {
    Campinput.value = data;
}


// traffic source code
let trfisrce = document.querySelector('#trfisrce');
let trfisrce_dp = document.querySelector('#trfisrce_dp');
let trfisrceinput = document.querySelector('#trfisrceinput');

trfisrce.addEventListener('click', function () {
    trfisrce_dp.classList.toggle('active');
})
function trfic(data) {
    trfisrceinput.value = data;
}











// let hourly = document.querySelectorAll('#hourly');
// let hourly_dp = document.querySelectorAll('#hourly_dp');
// let hrlyinput = document.querySelectorAll('#hrlyinput');

// for (let i = 0; i < hourly.length; i++) {
//     const element = hourly[i];
//     element.addEventListener('click',function(){
//         hourly_dp[i].classList.toggle('active');
//     })
//     function show(data) {
//         hrlyinput.value = data;
//     }
// }


