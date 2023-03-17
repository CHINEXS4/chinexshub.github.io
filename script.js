const header = document.querySelector("header")
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100)
});

let menu = document.querrySelector('#menu-icon');
let navlist = document.querrySelector('.navlist');

menu.onclick = () => {
    menu.classListtoggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}

