let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("progreso javascript");
        habilidades[1].classList.add("progreso html");
        habilidades[2].classList.add("progreso css");
        habilidades[3].classList.add("progreso python");
        habilidades[4].classList.add("progreso sql");
        habilidades[5].classList.add("progreso git");
        habilidades[6].classList.add("progreso comunicacion");
        habilidades[7].classList.add("progreso trabajo");
        habilidades[8].classList.add("progreso creatividad");
        habilidades[9].classList.add("progreso dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 