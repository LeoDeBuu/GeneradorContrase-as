const letrasMinusculasConst = "abcdefghijklmnñopqrstuvwxyz";
const letrasMayusculasConst = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const numerosConst = "0123456789";
const carcateresEspecialesConst = "()[]{}<>@#$&^_~+-*/=%.,?!;:";


let numeros = document.getElementById("numeros");
let letrasMayusculas = document.getElementById("letras");
let carcateresEspeciales = document.getElementById("carcateres-especiales");

const ValidarElementos = () =>{
    let MaxCaracteres = Number(document.getElementById("number-long").value);

    if(MaxCaracteres<3 || MaxCaracteres>40){
        alert("Se excede el numero de caracteres");
        return;
    }

    let stringComparacion = letrasMinusculasConst;

    if(numeros.checked)
        stringComparacion += numerosConst;

    if(letrasMayusculas.checked)
        stringComparacion += letrasMayusculasConst;

    if(carcateresEspeciales.checked)
        stringComparacion += carcateresEspecialesConst;

    let result = GenerarPassword(MaxCaracteres, stringComparacion);
    document.querySelector('#txt-texto-generado').textContent = result;
};

const GenerarPassword = (tamaño, stringComparacion) => {
    let password = "";
    for(let i=0; i<tamaño; i++){
        let randomIndex = Math.floor(Math.random() * stringComparacion.length);
        password += stringComparacion[randomIndex];
    }

    return password;
};

const CopiarPassword = () => {
    let password = document.getElementById("txt-texto-generado").textContent;

    navigator.clipboard.writeText(password)
    .then(function(){
        alert("Texto Copiado al portapapeles");
    }).catch(function(error){
        alert("No se pudo copiar al portapapeles");
    });
};

const buttonCopiar = document.querySelector('#copiar');
const buttonGenerar = document.querySelector("#generar");

buttonGenerar.addEventListener('click', (Event) => {
    ValidarElementos();
});

buttonCopiar.addEventListener('click', (Event) =>{
    CopiarPassword();
});

const checkboxClicked = document.querySelectorAll('[class^="circle"]');

checkboxClicked.forEach((button) => {
    button.addEventListener('click', (event) =>{
        const id = event.target.id;

        if(id == 'circle-1')
            numeros.checked = (numeros.checked == true)? false : true;
        if(id == 'circle-2')
            letrasMayusculas.checked = (letrasMayusculas.checked == true)? false : true;
        if(id == 'circle-3')
            carcateresEspeciales.checked = (carcateresEspeciales.checked == true)? false : true;
    })
})