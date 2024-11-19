const inputPoder = document.getElementById("input-poderes");
const inputNivel = document.getElementById("input-nivel");
const formulario = document.querySelector("form");
const button = document.getElementById("button-submit");

function formSubmit () {
    formulario.addEventListener('submit', function(evevt) {
        evevt.preventDefault();

        console.log(inputPoder.value);
        console.log(inputNivel.value);

    })
}

formSubmit()