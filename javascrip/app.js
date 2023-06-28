let header = document.querySelector("#header");
let contenedor = document.querySelector("#contenedor");
let body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})

function compra(){
    alert("Usted a comprado el producto seleccionado")
}
