const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
// crear constante de el icono de el menu mobile
const hamburIco = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
// Carrito de compras
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
//Detalles de producto
const closeIconDetail = document.querySelector('.product-detail-close');
const aside = document.querySelector('.product-detail2')

shoppingIcon.addEventListener('click',toggleShoppingMenu);
menuEmail.addEventListener('click', toggleDestopMenu);
hamburIco.addEventListener('click', toggleMobileMenu);
function toggleDestopMenu(){
    shoppingMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    // cerrar la ventana de detallesdel producto cuando abra el menu de escritorio
    aside.classList.add('inactive');
}

    // Esta funcion pone o quita la clase que esta dentro del los parentesis


//Primer paso, ejecutamos el evento del click con .addEventlistener , y definimos
//el nombre de la funcion. Lugo definimos la funcion para poder quitar o agregar el 
// menu en caso de que este o no este activo  
 
 function toggleMobileMenu(){
    shoppingMenu.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
    // cerrar la ventana de detallesdel producto cuando abra el menu mobile
    aside.classList.add('inactive');
 }
 function toggleShoppingMenu(){
    desktopMenu.classList.add('inactive');
    menuMobile.classList.add('inactive');
    shoppingMenu.classList.toggle('inactive');
    // cerrar la ventana de detallesdel producto cuando abra el menu de compras
    aside.classList.add('inactive');
 }

// lista de Carrito de compras

const productList = [];

productList.push({
    name: "Bmw x4M",
    price: "200.000",
    image: "https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/x4m/2019/inspire/bmw-x4m-inspire-mg-m-competition-desktop-03.jpg",
    description: "El BMW X4 es un automóvil todoterreno de lujo del segmento D con carrocería cupé similar al BMW X6 producido por el fabricante de automóviles alemán BMW desde el año 2014. Comparte plataforma con el BMW X3 el cual a su vez se basa en el BMW Serie 3.",
    id: 'x4'
});
productList.push({
    name: "Kawassaki z1000",
    price: "40.000",
    image: "https://0.cdn.autotraderspecialty.com/Motorcycle-200902913-5ee400c070a9ac48912f958bfad145fb.jpg",
    id: 'kawassaki',
    description: 'Un segundo a 200km/h causan mas emociones que 200 years a 1km/h'
});

productList.push({
    name: 'Can-am Maverick x3',
    price: "50.000",
    image:"https://utvactionmag.com/wp-content/uploads/2017/12/Can-Am2_WDP_2161_Maverick-X3-Intro_Mexico_.jpg",
    description: "Sin duda es el campeón de las rocas, la tierra y las dunas. El Maverick X3 se adapta a cualquier aventura que sueñes. Empaca y toma el camino para llegar a los campamentos más remotos, o ganar la carrera más difícil.",
    id: 'canam'
});
productList.push({
    name:'Bmw M2 competition' ,
    price: "90.000",
    image: "https://i2-prod.mirror.co.uk/incoming/article7423906.ece/ALTERNATES/s1200d/P90199694_highRes_the-new-bmw-m2-coupe.jpg",
    description: "The M2 Competition uses the BMW M GmbH S55 engine, a high performance variant of the N55 engine, that has been detuned from its application in the F80 M3 and F82 M4"
    ,id:'m2' 
});

productList.push({
    name: 'Jet Ski',
    price: '15.000',
    image: 'https://th.bing.com/th/id/R.0eb2b878fef0601b3e206256955a44ff?rik=qpEM9SFgqm6%2b7Q&riu=http%3a%2f%2fwww.rockypoint-vacations.com%2fwp-content%2fuploads%2f2011%2f04%2f12653_1.jpg&ehk=IPms7NUspEVGJnePJXscsIfmGpODQdI1oWfyCsA8TQY%3d&risl=&pid=ImgRaw&r=0',
    description: 'Jet Ski es una marca de motos acuáticas fabricadas por Kawasaki Heavy Industries. El nombre, sin embargo, se ha convertido en un nombre común usado para cualquier tipo de moto acuática. '
    ,id: 'jetski'
});



// se hace un ciclo para mostrar productos de manera dinamica

function mostrarProductos(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', product.id);
    
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
        // console.log(productCard.children[0]); 
        productCard.addEventListener('click', (e)=>{
            console.log("imagenAsaide", productCard);
            let information = productList.filter((elemento)=>  (elemento.id===productCard.id)); //.filter regresa todos los elementos del array que cumplan con la condition
            //informacion es = [[elemento]]
            information = information[0];
            const aside = document.querySelector('.product-detail2')

            const imagenProduct = document.querySelector('.product-detail2-img');
            imagenProduct.setAttribute('src', information.image);
            
            const nameProduct = document.querySelector('.product-detail2-name');
            nameProduct.innerText= information.name;

            const priceProduct = document.querySelector('.product-detail2-price');
            priceProduct.innerText = information.price;

            const descriptionProduct = document.querySelector('.product-detail2-description');
            descriptionProduct.innerText = information.description;

            aside.classList.toggle('inactive');
            closeIconDetail.addEventListener('click', ()=>{aside.classList.add('inactive')});

        } )
    }
}
mostrarProductos(productList);




// function detallesProductos(arr){
//     for (prodct of arr){
//     const asideProducDetail2 = document.createElement('aside');
//     asideProducDetail2.classList.add('product-detail2 inactive');
    

//     const productDetailClose = document.createElement('div');
//     productDetailClose.classList.add('product-detail-close');
//     const iconClose = document.createElement('img');
//     iconClose.setAttribute('src','./icons/icon_close.png' );

//     const imagenDetailProduct = document.createElement('img');
//     imagenDetailProduct.setAttribute('src',product.image );
//     console.log("img",product.image);

//     const productInfo2 = document.createElement('div');
//     productInfo2.classList.add('product-info2');
//     const priceDetail2 = document.createElement('p');
//     priceDetail2.innerText = product.price;
//     const nameDetail2 = document.createElement('p');
//     nameDetail2.innerText = product.name;
//     const descriptionOfProduct = document.createElement('p');
//     descriptionOfProduct.innerText = product.description;
//     const buttonCart = document.createElement('button');
//     buttonCart.classList.add('primary-button', 'add-to-cart-button');
//     const imgInButton = document.createElement("img");
//     imgInButton.setAttribute('src', './icons/bt_add_to_cart.svg');

//     //Ubicar ahora cada elemnto dentro de cada contenedor correspondiente
//     buttonCart.appendChild(imgInButton);//imagen dentro de button
//     //button,precio, descripcion, y nombre dentro de productInfo2(div)
//     productInfo2.appendChild(buttonCart);
//     productInfo2.appendChild(descriptionOfProduct);
//     productInfo2.appendChild(nameDetail2);
//     productInfo2.appendChild(priceDetail2);
//     //imagen dentro de product-deatil-close(div)
//     productDetailClose.appendChild(iconClose);
//     //product-info, imagenDetailProduct, productDetailClose dentro del aside
//     asideProducDetail2.appendChild(productInfo2);
//     asideProducDetail2.appendChild(imagenDetailProduct);
//     asideProducDetail2.appendChild(productDetailClose);
//     productDeatil2.appendChild(asideProducDetail2);    

// }

// }
// detallesProductos(productList);

// const showProductsOnScreen= (lista)=>{ //crea los productos en el menu
    
//     lista.forEach(product => { //recorre cada elemento del arreglo
//         const productDetail2= document.createElement('div');
//         productDetail2.classList.add('product-detail2');

//         productDetail2.addEventListener('click',()=>{ //evento de escucha
//             openProductInfo(product); //llamo a la funcion

//         })

//     const asideProducDetail2 = document.createElement('aside');
//     asideProducDetail2.classList.add('product-detail2');

//     const productDetailClose = document.createElement('div');
//     productDetailClose.classList.add('product-detail-close');
//     const iconClose = document.createElement('img');
//     iconClose.setAttribute('src','./icons/icon_close.png' );

//     const imagenDetailProduct = document.createElement('img');
//     imagenDetailProduct.setAttribute('src',product.image );

//     const productInfo2 = document.createElement('div');
//     productInfo2.classList.add('product-info2');
//     const priceDetail2 = document.createElement('p');
//     priceDetail2.innerText = product.price;
//     const nameDetail2 = document.createElement('p');
//     nameDetail2.innerText = product.name;
//     const descriptionOfProduct = document.createElement('p');
//     descriptionOfProduct.innerText = product.description;
//     const buttonCart = document.createElement('button');
//     buttonCart.classList.add('primary-button', 'add-to-cart-button');
//     const imgInButton = document.createElement("img");
//     imgInButton.setAttribute('src', './icons/bt_add_to_cart.svg');

//     //Ubicar ahora cada elemnto dentro de cada contenedor correspondiente
//     buttonCart.appendChild(imgInButton);//imagen dentro de button
//     //button,precio, descripcion, y nombre dentro de productInfo2(div)
//     productInfo2.appendChild(buttonCart);
//     productInfo2.appendChild(descriptionOfProduct);
//     productInfo2.appendChild(nameDetail2);
//     productInfo2.appendChild(priceDetail2);
//     //imagen dentro de product-deatil-close(div)
//     productDetailClose.appendChild(iconClose);
//     //product-info, imagenDetailProduct, productDetailClose dentro del aside
//     asideProducDetail2.appendChild(productInfo2);
//     asideProducDetail2.appendChild(imagenDetailProduct);
//     asideProducDetail2.appendChild(productDetailClose);

// });

// const openProductInfo = (product)=>{ //muestra el aside con la info del producto seleccionado
//     const aside = document.querySelector('.product-detail2');
//     const productImg = document.querySelector('.product-detail2 > img:nth-child(2)');
//     const productPrice = document.querySelector('.product-info2 .product-price');
//     const productName= document.querySelector('.product-info2 .product-name');
       
//         productImg.setAttribute('src',product.img);
//         productPrice.textContent= product.price;
//         productName.textContent= product.name;


// }
// }

