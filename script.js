var animales = [
    {
        nombre: "titi",
        informacion: "El Titi Boliviano es un pequeño primate endémico de Bolivia que se encuentra en los bosques tropicales.",
        imagen: "titi.jpg"
    },
    {
        nombre: "delfin",
        informacion: "El Delfín del Amazonas es un delfín de agua dulce que habita en la cuenca del Amazonas.",
        imagen: "delfin.jpg"
    },
    {
        nombre: "rana",
        informacion: "La Rana Gigante de Titicaca es una especie de rana endémica del lago Titicaca, conocida por su gran tamaño.",
        imagen: "rana.jpg"
    },
    {
        nombre: "condor",
        informacion: "El condor andino es un animal endemico de los Andes en América del Sur y es el ave voladora más grande del mundo en términos de envergadura alar.",
        imagen: "condor.jpg"
    },
    // podemos ir agregando mas opciones aqui
];

var animalAdivinar = "";
var intentos = 3;

function iniciarJuego() {
    document.getElementById("btnIniciar").style.display = "none";
    document.getElementById("respuesta").style.display = "block";
    document.getElementById("mensaje").style.display = "block";
    document.getElementById("juego").style.display = "block";

    animalAdivinar = animales[Math.floor(Math.random() * animales.length)];
    intentos = 3;
    document.getElementById("mensaje").innerHTML = "Tienes " + intentos + " intentos para adivinar el animal.";
    document.getElementById("respuesta").value = "";
    document.getElementById("informacion").innerHTML = "";
    document.getElementById("btnIniciar").style.display = "none";
}

function comprobarRespuesta() {
    var respuesta = document.getElementById("respuesta").value.toLowerCase();

    if (respuesta === animalAdivinar.nombre.toLowerCase()) {
        document.getElementById("mensaje").innerHTML = "¡Correcto! ¡Has adivinado el animal endémico de Bolivia!";
        mostrarInformacionAnimal(animalAdivinar.informacion, animalAdivinar.imagen);
        document.getElementById("btnIniciar").style.display = "block";
        
        // Agrega una clase CSS para animar la imagen del animal.
        document.querySelector(".imagen-animal").classList.add("ganador");
    } else {
        intentos--;
        if (intentos > 0) {
            document.getElementById("mensaje").innerHTML = "Respuesta incorrecta. Te quedan " + intentos + " intentos.";
        } else {
            document.getElementById("mensaje").innerHTML = "¡Agotaste tus intentos! El animal correcto era: " + animalAdivinar.nombre;
            mostrarInformacionAnimal(animalAdivinar.informacion, animalAdivinar.imagen);
            document.getElementById("btnIniciar").style.display = "block";
        }
    }
}

function mostrarInformacionAnimal(informacion, imagenURL) {
    var infoDiv = document.getElementById("informacion");
    infoDiv.innerHTML = '<img src="' + imagenURL + '" alt="' + animalAdivinar.nombre + '" class="imagen-animal" /><p>' + informacion + '</p>';
}

iniciarJuego();
