const menuBarEl = document.getElementById("menubar");
const menuMobileshow = document.querySelector(".modile_drop");
const menubarOff  = document.querySelector('.modile_drop').querySelector('ul').querySelectorAll('a')

menubarOff.forEach((mp) => {
    mp.addEventListener('click', () => {
      menuMobileshow.classList.toggle('show_modile_drop')
    })
})

menuBarEl.addEventListener("click", () => {
  console.log("menubar Clicked");
  menuMobileshow.classList.toggle("show_modile_drop");
});

addEventListener('resize', () => {
  console.log(innerWidth);
  if (innerWidth > 700) {
    menuMobileshow.classList.remove("show_modile_drop")
  }
  
})
