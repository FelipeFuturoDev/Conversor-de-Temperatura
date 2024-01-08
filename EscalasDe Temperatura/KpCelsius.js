// C + 273,15 = K
// c = k - 273,15 

var du,c, ke, res;

function celsius(){

ke = document.querySelector("#ola").value;

du = 273.15;

c = parseFloat(ke) - parseFloat(du);

alert(ke + "K, São " + c + "ºC.");

document.getElementById("demo").innerHTML = ke + "K, São "+ c + "ºC.";

}