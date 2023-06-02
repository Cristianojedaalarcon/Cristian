/*(function()
{
    alert('Hola');

}());*/
// Ejercicio 1

function Temperatura() {

    var numero1 = parseFloat(document.getElementById('Temper').value);
    if (numero1 <= 15) {
        resultado = "Frio";
    }
    else if (numero1 > 15 || numero1 < 25) {
        resultado = "Templado";
    }
    if (numero1 >= 26) {
        resultado = "Calor";
    }
    document.getElementById('result').value = resultado
}

// Ejercio 2
function Producto() {
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 = parseFloat(document.getElementById('num2').value);
    var numero3 = parseFloat(document.getElementById('num3').value);
    var numero4 = parseFloat(document.getElementById('num4').value);
    var numero5 = parseFloat(document.getElementById('num5').value);

    var resultado = numero1 * numero2 * numero3 * numero4 * numero5;

    document.getElementById('res').value = resultado
    //return resultado;
}

// Ejercicio 3

function fizzBuzz() {
    var numBox = document.getElementById("resp").value;
    var cadenaFb = "";
    for (var i = 1; i <= parseInt(numBox); i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            // document.write("FizzBuzz<br />");
            cadenaFb += "FizzBuzz, ";
        } else if (i % 3 == 0) {
            // document.write("Fizz<br />");
            cadenaFb += "Fizz, "
        } else if (i % 5 == 0) {
            // document.write("Buzz<br />");
            cadenaFb += "Buzz, "
        } else {
            // document.write(i + ", ");
            cadenaFb += i + ", ";
        }
    }
    document.getElementById("respfb").value = cadenaFb;
}




// Ejercicio 4

function Fecha() {

    var f = new Date();
    var diaSemana = f.getDay();
    var dia = f.getDate();
    var mes = f.getMonth();
    var year = f.getFullYear();

    var pDiaSemana = document.getElementById('mostrarfecha');
    var pDia = document.getElementById('mostrarfecha');
    var pMes = document.getElementById('mostrarfecha');
    var pYear = document.getElementById('mostrarfecha');

    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pDiaSemana = semana[diaSemana];
    pDia = dia;
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMes = meses[mes];
    pYear = year;
    var res = pDiaSemana + " " + pDia + " de " + pMes + " " + " del " + pYear;

    document.getElementById('mostrarfecha').value = res;

}