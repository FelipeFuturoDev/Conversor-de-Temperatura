// F = C x 1,8 + 32.
//( K − 273,15) × 1,8 + 32 = °F

// C + 273,15 = K
// c = k - 273,15 

var du,c, ke, res, ce, umVoito, tresDois;

function celsius(){

ke = document.querySelector("#ola").value;

du = 273.15;

c = parseFloat(ke) - parseFloat(du);

umVoito = 1.8;
tresDois = 32;

ce = (parseFloat(c) * parseFloat(umVoito)) + parseFloat(tresDois);

alert(ke + "K, São " + ce + "ºF.");

document.getElementById("demo").innerHTML = ke + "K, São " + ce + "ºF.";

}