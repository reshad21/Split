// =================responsive navber code================= //
let responsiveBar = document.querySelector('#responsiveBar');
let responsiveContent = document.querySelector('#responsiveContent');
let resCrossIcon = document.querySelector('#resCrossIcon');

responsiveBar.addEventListener('click', function(e){
    e.preventDefault();
    responsiveContent.classList.add('active');
});

resCrossIcon.addEventListener('click',function(e){
    responsiveContent.classList.remove('active');
})
