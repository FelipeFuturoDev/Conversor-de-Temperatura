//[K] = ([°F] + 459,67) × 5/9 + 273.15;

var kelvin, fahrenheit, n1, n2, n3, n4, operacao;

function kelvin(){
    n1 = 459.67;
    n2 = 5 / 9;
    n3 = 32;
    n4 = 273.15
  
    fahrenheit = document.querySelector("#ola").value;

    operacao = ((fahrenheit - n3) * n2) + n4;

    document.getElementById("demo").innerHTML = fahrenheit + "ºF, São " + operacao + "K";
   // (fahrenheit + "ºF, São " + operacao + "K")

    alert(fahrenheit + "ºF, São " + operacao + "K");
}