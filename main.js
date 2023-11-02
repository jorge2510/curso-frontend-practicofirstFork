const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
// crear constante de el icono de el menu mobile
const hamburIco = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
// Carrito de compras
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');


shoppingIcon.addEventListener('click',toggleShoppingMenu);
menuEmail.addEventListener('click', toggleDestopMenu);
hamburIco.addEventListener('click', toggleMobileMenu);
function toggleDestopMenu(){
    shoppingMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

    // Esta funcion pone o quita la clase que esta dentro del los parentesis


//Primer paso, ejecutamos el evento del click con .addEventlistener , y definimos
//el nombre de la funcion. Lugo definimos la funcion para poder quitar o agregar el 
// menu en caso de que este o no este activo  
 
 function toggleMobileMenu(){
    shoppingMenu.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
 }
 function toggleShoppingMenu(){
    desktopMenu.classList.add('inactive');
    menuMobile.classList.add('inactive');
    shoppingMenu.classList.toggle('inactive');
 }

