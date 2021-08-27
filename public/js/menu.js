const header = document.getElementById('header');
const burgerMenu = document.querySelector('.fas.fa-bars');
const menu = document.querySelector('.header-nav-bar');
const barraProgreso = document.getElementById('barra-progreso');

eventListeners();

function eventListeners(){

    window.addEventListener('resize', anchoVentana);
    document.addEventListener('scroll', barraScroll);

    let contador = 0;
    burgerMenu.addEventListener('click', () =>{
        contador++;
        if(contador == 1){
            burgerMenu.className = 'fas fa-times';
            burgerMenu.classList.remove('fas.fa-bars');
            burgerMenu.style.color = 'var(--coralFuerte)';
            menu.style.opacity = 1;
        }else{
            burgerMenu.className = 'fas fa-bars';
            burgerMenu.classList.remove('fas.fa-times');
            burgerMenu.style.color = 'black';
            menu.style.opacity = 0;
            contador = 0;
        }
    })

}

function barraScroll(){
    let scrollVertical = window.scrollY;
    guardarBarraLS();
    let totalHeight = localStorage.getItem('height');
    let porcentaje = (scrollVertical/totalHeight)*100;

    barraProgreso.style.width = porcentaje + '%';

    if(porcentaje>0){
        header.style.boxShadow = '0px 1px 1px 0px rgba(0,0,0,0.5)';
        header.style.opacity = '0.95';
    }else{
        header.style.boxShadow = '0px 0px 0px 0px rgba(255,255,255,0.5)';
        header.style.opacity = '1';
    }
}

function guardarBarraLS(){
    let height = window.scrollY;
    let totalHeight = localStorage.getItem('height');
    if(window.scrollY > 1 && window.scrollY > totalHeight){
        localStorage.setItem('height', height);
    }
}

function anchoVentana(){
    localStorage.setItem('height', 0)
}