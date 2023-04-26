let menuVisible = false;
//FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classlist ="";
        menuVisible = false;
    }else
        document.getElementById("nav").classlist ="responsive";
        menuVisible = true;
}

//FUNCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList,add("progreso javascript");
        habilidades[1].classList,add("progreso html");
        habilidades[2].classList,add("progreso css");
        habilidades[3].classList,add("progreso python");
        habilidades[4].classList,add("progreso comunicacion");
        habilidades[5].classList,add("progreso trabajo");
        habilidades[6].classList,add("progreso creatividad");
        habilidades[7].classList,add("progreso dedicacion");
    }
}
//DETECTA EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll = function(){
    efectoHabilidades();
}