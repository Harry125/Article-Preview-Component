const selectBtn = document.querySelector('.btn');
const selectMenu = document.querySelector('.socials');

selectBtn.addEventListener('click', function(){
    selectBtn.classList.toggle('btn--active');
    selectMenu.classList.toggle('socials--active');
})