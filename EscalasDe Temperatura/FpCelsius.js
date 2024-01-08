//Para converter graus Celsius em graus Fahrenheit, multiplique por 1,8 e adicione 32.
// Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida por 1,8.
//C = (F - 32) / 1,8;

var calsius, fahrenheit, n1, n2, operacao;

function fah(){
    fahrenheit = document.querySelector("#oiu").value;

    n1 = 32;
    n2 = 1.8;
    operacao = (fahrenheit-n1) / n2;

    alert(fahrenheit + "ºF são, " + operacao + "ºC.");
    document.getElementById("demo").innerHTML = fahrenheit + "ºF são, " + operacao + "ºC.";
   
}