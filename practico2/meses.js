//Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
//marzo, etc. Deberá guardar esta información en alguna de las estructuras ya vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en el texto a imprimir.
//Su programa deberá ser guardado en un archivo meses.js y consistirá de imprimir por consola la cantidad de días que tiene el mes ingresado bajo el siguiente formato:
//"La cantidad de dias del mes de [mes] es [cantidadDeDias]"

const readlineSync = require('readline-sync');
let numero = readlineSync.question("por favor ingrese un numero entero del 1 al 12 inclusive ");

let meses=[{mes:"enero",dias:31},{mes:"febrero",dias:28},{mes:"marzo",dias:31},{mes:"abril",dias:30},{mes:"mayo",dias:31},{mes:"junio",dias:30},{mes:"julio",dias:31},{mes:"agosto",dias:31},{mes:"septiembre",dias:30},{mes:"octubre",dias:31},{mes:"noviembre",dias:30},{mes:"diciembre",dias:31}]

 if(numero==1){
    console.log("La cantidad de dias del mes de " + (meses[0].mes)+" es "+ (meses[0].dias));
} else if (numero==2){
    console.log("La cantidad de dias del mes de " + (meses[1].mes)+" es "+ (meses[1].dias));
} else if (numero==3){
  console.log("La cantidad de dias del mes de " + (meses[2].mes)+" es "+ (meses[2].dias));
} else if (numero==4){
  console.log("La cantidad de dias del mes de " + (meses[3].mes)+" es "+ (meses[3].dias));
} else if (numero==5){
  console.log("La cantidad de dias del mes de " + (meses[4].mes)+" es "+ (meses[4].dias));
} else if (numero==6){
  console.log("La cantidad de dias del mes de " + (meses[5].mes)+" es "+ (meses[5].dias));
} else if (numero==7){
  console.log("La cantidad de dias del mes de " + (meses[6].mes)+" es "+ (meses[6].dias));
} else if (numero==8){
  console.log("La cantidad de dias del mes de " + (meses[7].mes)+" es "+ (meses[7].dias));
} else if (numero==9){
  console.log("La cantidad de dias del mes de " + (meses[8].mes)+" es "+ (meses[8].dias));
} else if (numero==10){
  console.log("La cantidad de dias del mes de " + (meses[9].mes)+" es "+ (meses[9].dias));
} else if (numero==11){
  console.log("La cantidad de dias del mes de " + (meses[10].mes)+" es "+ (meses[10].dias));
} else if (numero==12){
  console.log("La cantidad de dias del mes de " + (meses[11].mes)+" es "+ (meses[11].dias));
} 
else{console.log("numero invalido")}


//numero=(parseInt(numero)-1)
//console.log("La cantidad de dias del mes de " + (meses[numero].mes)+" es "+ (meses[numero].dias))      <---codigo alternativo