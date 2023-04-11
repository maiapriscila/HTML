//declação de variaveis
var nome = "Priscila";
let idade = 37;
const PI = 3.14;
console.log(idade);
console.log(PI);

// declaração de função
function calcularSoma(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

//condição
if (idade>=18) { 
    console.log(nome + "maior de idade");
} else if (idade >=10) {
    console.log (nome + "menor de idade.");
} else {
    console.log (nome + "qualquer coisa");
}

//loop
for (let i = 0; i < 5; i++) {
    console.log(calcularSoma(i,idade));
}


var nome="Olá mundo";

let x = 10;
let y = 5;
let soma = x+y;
console.log(nome);
console.log(x);
console.log(y)
console.log(soma);

let w = 18

if(w=0){
    console.log(w + "0 numero é impar")
    }
    else{
        console.log(w+ "0 numero é par")
    }

    let r=5;

    if(r>0) {
        console.log(r + 'É maior que 0');
 }
 else if(r <0){
     console.log (r + 'É menor que 0');
 }
else if (r = 0) {
    console.log (r + 'É igual que 0')
}

let t= 18
if(t>=18){
    console.log("pode");
}
else {
    console.log("não pode");

}
