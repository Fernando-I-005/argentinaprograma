//3a. Crea cuatro variables que contengan valores numéricos.
let num1= 1;
let num2= 3;
let num3=89;
let num4=100;

//3b. Suma las dos primeras variables y guarda el resultado en otra variable.
let sumaNum1Num2=num1 + num2;

//3c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let restaNum4Num3= num4 -num3;

//3d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal.
// El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
let resultadoFinal= sumaNum1Num2*restaNum4Num3; 

//3e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
let esPar= resultadoFinal%2===0;

//3f. Imprima por consola un mensaje con el siguiente formato:“Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La respuesta a verificar si el resultado final es par es: [esPar]”
console.log("Mis variables iniciales fueron: "+num1+", "+num2+", "+num3+" y "+num4+"."+"La respuesta a verificar si el resultado final es par es: "+ esPar);

