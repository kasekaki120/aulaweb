function calcular(){
// peso = parseFloat(document.formulario.peso.value);
peso =parseFloat(document.getElementById("peso").value);
altura =parseFloat(document.getElementById("altura").value); 
console.log("peso" + peso);
resultado = peso/(altura*altura);
    alert("O IMC E" + resultado);
}