const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
// crear constante de el icono de el menu mobile
const hamburIco = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
// Carrito de compras
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

// lista de Carrito de compras

const productList = [];

productList.push({
    name: "Jbl",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Gorra gooring",
    price: 80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 't-shirt',
    price: 88,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
});
// se hace un ciclo para mostrar productos de manera dinamica

function mostrarProductos(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
    
        const mainImage = document.createElement('img');
        mainImage.setAttribute('src', product.image) ;
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
    
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice); //precio dentro de div
        productInfoDiv.appendChild(productName);// nombre dentro de div
    
        
        const productFigure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productFigure.appendChild(productImg); //Img dentro del figure
    
        productInfo.appendChild(productInfoDiv);//div dentro de productInfo(div)
        productInfo.appendChild(productFigure);// Figure dentro de productInfo(div)
    
        productCard.appendChild(mainImage);//Imagen dentro del contenedor principal
        productCard.appendChild(productInfo);//Product info dentro del contenedor principal
        cardsContainer.appendChild(productCard);//Todo dentro de cardsContainer
    }
}
mostrarProductos(productList);