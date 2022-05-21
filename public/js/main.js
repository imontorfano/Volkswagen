"use strict";

//NAV
const nav = `
    <div class="container-fluid">
        <i class="fas fa-solid fa-car fa-2x" id="logo"></i>
        <a class="navbar-brand mr-0 ml-1" href="index.html">Volkswagen</a>
        <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarCollapse"
        >
            <ul class="navbar-nav">
                <li class="nav-item">
                <a href="index.html" class="nav-link" id="nav-inicio"
                    >Inicio</a>
                </li>
                <li class="nav-item">
                <a href="products.html" class="nav-link" id="nav-products"
                >Catálogo</a>
                </li>
                <li class="nav-item">
                <a href="sucursales.html" class="nav-link" id="nav-sucursales"
                >Sucursales</a>
                </li>
                <li class="nav-item">
                <a href="contact.html" class="nav-link" id="nav-contact"
                >Contacto</a>
                </li>
                <li class="nav-item">
                <a href="subscribe.html" class="nav-link" id="nav-subscribe"
                >Suscribirme</a>
                </li>
            </ul>
        </div>
    </div>
`;

document.querySelector("#nav").innerHTML = nav;

//FOOTER
const footer = `
    <div class="row">
        <div class="col-12 text-center py-1">
            <a href="https://www.facebook.com/"
            ><i class="fab fa-facebook fa-2x"></i
            ></a>
            <a href="https://www.instagram.com/"
            ><i class="fab fa-instagram fa-2x"></i
            ></a>
            <a href="https://twitter.com/home?lang=es"
            ><i class="fab fa-twitter fa-2x"></i
            ></a>
        </div>
        <div class="col-12 text-center">
            <a href="https://github.com/imontorfano" class="links" id="copyright">&copy; Ignacio M 2022</a>
        </div>
    </div>
`;

document.querySelector("#footer").innerHTML = footer;


//Para destacar con la clase "active" el nav-link correspondiente segun la seccion en la que estamos
let pathname = window.location.pathname;

switch (pathname) {
    case "/index.html":
        document.querySelector("#nav-inicio").classList.add('active');
    break;
    case "/sucursales.html":
    document.querySelector("#nav-sucursales").classList.add('active');
    break;
    case "/products.html":
        document.querySelector("#nav-products").classList.add('active');
    break;
    case "/contact.html":
    document.querySelector("#nav-contact").classList.add('active');
    break;
    case "/subscribe.html":
        document.querySelector("#nav-subscribe").classList.add('active');
    break;
}

//la animacion del icono con forma de auto se activa tambien al pasar sobre el texto "Volkswagen"
let brand = document.querySelector(".navbar-brand");

brand.addEventListener('mouseover', function() { 
    document.querySelector("#logo").classList.add("animation-logo")
});

brand.addEventListener('mouseout', function() { 
    document.querySelector("#logo").classList.remove("animation-logo")
});




//CATALOGO

//Los datos para la pagina los traigo desde un archivo JSON externo, alojado en mi github
fetch('https://raw.githubusercontent.com/imontorfano/Volkswagen/main/db-local.json')
.then(response => response.json())
.then(data => { 
    console.log(data);
    let catalogo = document.querySelector("#catalogo");
    for(let i=0; i < data.length; i++) {
        if(data[i]["stock"]) {
            var stock = "Si";
        } else {
            var stock = "No";
        }
        catalogo.innerHTML += `
        <div class="col-md-3">
            <div class="card shadow my-3" style="min-height: 450px;">
                <img src="${data[i]["car_photo"]}" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">${data[i]["car_name"]} <br> ${data[i]["motor_type"]}</h5>
                    <p class="card-text">
                        Precio: $${data[i]["price"]} | Stock: ${ stock }
                    </p>  
                    <a href="#" class="btn btn-dark my-auto">Comprar</a>
                </div>
            </div>
        </div>`;
    } })
.catch( error => console.log(error));





