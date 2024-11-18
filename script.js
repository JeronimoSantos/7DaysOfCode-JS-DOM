const inputPoder = document.getElementById("input-poderes");
const inputNivel = document.getElementById("input-nivel");

function poderesZ () {

    inputPoder.addEventListener("click", modifyText, false)
    console.log(inputPoder.value);
    console.log(inputNivel.value);
}

poderesZ()