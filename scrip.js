let menuVisible = false;

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

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

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


window.onscroll = function(){
    efectoHabilidades();
} 