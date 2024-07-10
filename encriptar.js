function copiar() {
    console.log("Copiando");
    // Obtener el contenido del elemento con el ID "el_resultado_es"
    const contenido = document.getElementById("el_resultado_es").textContent;

    // Escribir el contenido en el portapapeles
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar al portapapeles:", error);
        });
}

function encriptar() {

    // Camptulo el objeto input y lo guardo en una variable
    let el_texto = document.querySelector("#el_texto").value;

    if (el_texto == "") {
        //por si el usuario da clic en el boton y no ingreso un texto
        alert("Por favor ingresa un texto");
        document.getElementById("sin_texto").style.display = "block";
        document.getElementById("el_resultado_es").innerHTML = "";
    } else {
        //convierto el texto en un array donde cada letra sera una posicion 
        let arr_texto = [...el_texto];

        //creo una variable vacia para inr almacenando el resultado de la verificacion
        let el_resultado = "";

        //este ciclo va a recorrer cada letra de la palabra y si encuentra que es una vocal la concatena con el nuevo valor en la variable el_resultado
        for (let index = 0; index < arr_texto.length; index++) {
            // La letra "e" es convertida para "enter"
            // La letra "i" es convertida para "imes"
            // La letra "a" es convertida para "ai"
            // La letra "o" es convertida para "ober"
            // La letra "u" es convertida para "ufat"

            if (arr_texto[index] === "e") {
                el_resultado = el_resultado + 'enter';
            }

            if (arr_texto[index] === "i") {
                el_resultado = el_resultado + 'imes';
            }

            if (arr_texto[index] === "a") {
                el_resultado = el_resultado + 'ai';
            }

            if (arr_texto[index] === "o") {
                el_resultado = el_resultado + 'ober';
            }

            if (arr_texto[index] === "u") {
                el_resultado = el_resultado + 'ufat';
            }

            if (arr_texto[index] !== "e" && arr_texto[index] !== "i" && arr_texto[index] !== "a" && arr_texto[index] !== "o" && arr_texto[index] !== "u") {
                el_resultado = el_resultado + arr_texto[index];
            }
        }

        //al final muestro el resultado en el div con id sin_texto y oculto la imagen de ingreso de texto
        document.getElementById("sin_texto").style.display = "none";
        document.getElementById("el_resultado_es").innerHTML = el_resultado;
    }
}

function desencriptar() {
    console.log("ok");

    let el_texto = document.querySelector("#el_texto").value;

    if (el_texto.value == "") {
        alert("Por favor ingresa un texto");
        document.getElementById("sin_texto").style.display = "block";
        document.getElementById("el_resultado_es").innerHTML = "";
    } else {
        // La letra "e" es convertida para "enter"
        // La letra "i" es convertida para "imes"
        // La letra "a" es convertida para "ai"
        // La letra "o" es convertida para "ober"
        // La letra "u" es convertida para "ufat"

        if (el_texto.includes("enter")) {
            el_texto = el_texto.replace(/enter/g, "e");
            console.log(el_texto);
        }

        if (el_texto.includes("imes")) {
            el_texto = el_texto.replace(/imes/g, "i");
            console.log(el_texto);
        }

        if (el_texto.includes("ai")) {
            el_texto = el_texto.replace(/ai/g, "a");
            console.log(el_texto);
        }

        if (el_texto.includes("ober")) {
            el_texto = el_texto.replace(/ober/g, "o");
            console.log(el_texto);
        }

        if (el_texto.includes("ufat")) {
            el_texto = el_texto.replace(/ufat/g, "u");
            console.log(el_texto);
        }

        document.getElementById("sin_texto").style.display = "none";
        document.getElementById("el_resultado_es").innerHTML = el_texto;

    }
}