var celsius, fahrenheit, numeUm, TresDois, primeConta, note1, note2, c;

function graus(){
    // F = C x 1,8 + 32.
    celsius = document.querySelector("#oi").value;
    numeUm = 1.8;
    TresDois = 32;

    primeConta = celsius * numeUm;

    fahrenheit = parseFloat(primeConta) + parseFloat(TresDois);
    
    note1 = " São ";
    note2 = "°F."
    c = "°C"
    document.getElementById("demo").innerHTML = celsius + c + note1 + fahrenheit + note2;

    alert(celsius + c + note1 + fahrenheit + note2);    
     
   // document.getElementById("demo").innerHTML = fahrenheit;
}