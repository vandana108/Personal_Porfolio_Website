let navToggler = document.getElementById(".nav-Toggler")
navToggler.addEventListener("click", makeAcross);

function makeAcross(){
  navToggler.classList.toggle("active");

  let nav = document.querySelector(".nav")
  nav.classList.toggle("open");

  if(nav.classList.contains("open")){
    nav.maxHeight = nav.scrollHeight+"px"
  }
  else{
    nav.removeAttribute("style");
  }
}