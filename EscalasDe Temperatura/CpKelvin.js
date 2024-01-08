// 0ºC + 273,15 = 273,15K

var c, ke, res;
function kelvin(){

c = document.querySelector("#oio").value;

ke = 273.15;

 res = parseFloat(c) + parseFloat(ke);

alert(c + "ºC, São " + res + "ºK.");

document.getElementById("demo").innerHTML = c + "ºC, São "+ res + "ºK.";

}