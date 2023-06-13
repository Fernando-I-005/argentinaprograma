//5a. Crea un arreglo vacío con el nombre de frutas.
let frutas=[];

//5b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de variables o no.
frutas.push("pera","banana","manzana","tomate","anana");

//5c. Deberás obtener el última fruta agregada y guardarla en la variable ultima. Además deberás imprimir su valor por consola, respetando el siguiente formato
// “La ultima fruta agregada fue: [ultima]”
let ultima= frutas.slice(4,5);
console.log("La ultima fruta agregada fue: "+ultima);

//5d. Deberás obtener la primera fruta agregada y guardarla en la variable primera. Además deberás imprimir su valor por consola, respetando el siguiente formato
// “La primera fruta agregada fue: [primera]”
let primera= frutas.slice(0,1);
console.log("La primera fruta agregada fue: "+primera);