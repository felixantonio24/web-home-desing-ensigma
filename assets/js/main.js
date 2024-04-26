
const loginButton = document.querySelector("#logins");
const modal = document.querySelector(".container_login");
const image = document.querySelector(".img_header")
function abrirModal() {
    modal.style.display = "block";
    image.style.opacity= "0.2"
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10); // Espera 10ms para asegurarse de que el cambio de display a block ocurra antes de cambiar la opacidad
}

loginButton.addEventListener("click", abrirModal);

