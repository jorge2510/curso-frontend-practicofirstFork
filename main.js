const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); 
    // Esta funcion pone o quita la clase que esta dentro del los parentesis
}

//Primer paso, ejecutamos el evento del click con .addEventlistener , y definimos
//el nombre de la funcion. Lugo definimos la funcion para poder quitar o agregar el 
// menu en caso de que este o no este activo  