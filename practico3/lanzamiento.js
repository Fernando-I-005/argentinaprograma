/*En este ejercicio, queremos que imprima una cuenta regresiva de lanzamiento de un cohete a Marte. Dicha cuenta irá desde 10 hasta el despegue. Específicamente, queremos que:
● Cree un bucle de 10 a 0. Ayuda: inicializador: let i = 10;
● Para cada iteración, imprima por consola usando console.log.
● Diferentes números de iteración requieren que se coloque un texto diferente en el párrafo para esa iteración (necesitará una declaración condicional):
- Si el número es 10, imprima "Cuenta regresiva 10" en el párrafo.
- Si el número es 0, imprime "Lanzamiento!", al párrafo.
- Para cualquier otro número, imprima solo el número al párrafo.
● ¡Recuerda incluir un iterador! Sin embargo, en este ejemplo estamos contandon hacia atrás después de cada iteración, no hacia arriba, por lo que **no** quiere i++ — ¿cómo se itera hacia abajo? */

let texto
for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        texto = "Lanzamiento!";
    } else if (i == 10) {
        texto = "Cuenta regresiva 10";
    } else {
        texto = i;
    }
    console.log(texto);
};