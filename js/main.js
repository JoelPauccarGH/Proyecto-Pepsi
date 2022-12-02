function imgSlider(anything){
    document.querySelector('.imgbox-pepsi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.section__container');
    sec.style.background = color;
}
function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}