
let desde = Number(prompt("Ingresa un numero: "));
let hasta = Number(prompt("Final: "));

const resul = document.getElementById("resultado");
const cuerpo = document.getElementById("cuerpoTabla");

resul.innerHTML = "";
let filasTabla = "";

while (desde <= hasta) {
    // Generalmente las tablas de multiplicar van del 1 al 10
    for (let i = 1; i <= 10; i++) {
        filasTabla += "<tr>";
        filasTabla += "<td>" + desde + "</td>";
        filasTabla += "<td>" + i + "</td>";
        filasTabla += "<td>" + (desde * i) + "</td>";
        filasTabla += "</tr>";
    }
    desde = desde + 1;
}

// Se inserta todo el HTML generado de golpe en el tbody
cuerpo.innerHTML = filasTabla;

//capturando los valores de los inputs

document.getElementById("btnSumar").addEventListener("click",function(){
    let num1=parseInt(document.getElementById("num1").value);
     let num2=parseInt(document.getElementById("num2").value);

     let suma=num1+num2;
     document.getElementById("resultadoSuma").innerHTML="La suma es: "+suma;
});