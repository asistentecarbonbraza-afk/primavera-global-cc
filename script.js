const boton = document.getElementById("boton");
const sorpresa = document.getElementById("sorpresa");

// Al presionar el botón
boton.addEventListener("click", function () {

```
// Mostrar la sorpresa
sorpresa.classList.add("mostrar");

// Cambiar el texto del botón
boton.innerHTML = "💛 ¡Feliz Primavera! 🌻";

// Evitar que se presione muchas veces
boton.disabled = true;

// Crear lluvia de flores
crearFlores();
```

});

// =============================
// CREAR FLORES QUE CAEN
// =============================

function crearFlores() {

```
for (let i = 0; i < 45; i++) {

    const flor = document.createElement("div");

    flor.innerHTML = "🌻";

    flor.style.position = "fixed";

    flor.style.left =
        Math.random() * 100 + "vw";

    flor.style.top = "-60px";

    flor.style.fontSize =
        (20 + Math.random() * 35) + "px";

    flor.style.zIndex = "100";

    flor.style.pointerEvents = "none";

    flor.style.animation =
        `caer ${3 + Math.random() * 4}s linear forwards`;

    flor.style.animationDelay =
        Math.random() * 2 + "s";

    document.body.appendChild(flor);


    // Eliminar la flor después
    setTimeout(function () {

        flor.remove();

    }, 8000);

}
```

}

// =============================
// ANIMACIÓN DE LAS FLORES
// =============================

const estilo = document.createElement("style");

estilo.innerHTML = `

@keyframes caer {

```
0% {

    transform:
        translateY(0)
        rotate(0deg)
        scale(0.7);

    opacity: 0;

}

10% {

    opacity: 1;

}

100% {

    transform:
        translateY(110vh)
        rotate(720deg)
        scale(1);

    opacity: 0.9;

}
```

}

`;

document.head.appendChild(estilo);
alert("¡JavaScript está funcionando! 🌻");
console.log("JavaScript funcionando correctamente");
