
const loginButton = document.querySelector("#logins");
const modal = document.querySelector(".container_login");
const image = document.querySelector(".img_header")
const close = document.querySelector(".cerrar")
function abrirModal() {
    modal.style.display = "block";
    image.style.opacity= "0.2"
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10); // Espera 10ms para asegurarse de que el cambio de display a block ocurra antes de cambiar la opacidad
}

function CloseContainer (){
    modal.style.display="none";
    image.style.opacity= "1"
}

loginButton.addEventListener("click", abrirModal);
close.addEventListener("click",CloseContainer )


const mover = document.querySelector("#open")

mover.addEventListener("click", ()=>{
    const barrquequiero = document.querySelector(".h2_header2");
    if(barrquequiero){  
    barrquequiero.scrollIntoView({ behavior: "smooth"});
 }
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.container_principalmain').forEach(element => observer.observe(element));