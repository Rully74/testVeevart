# TestVeevart
En el repositorio se encuentra:
- Solución al reto "test9" con el bonus 1
- Solución al reto "test19" con el bonus 1
## ¿Cómo ejecutar el reto 9 (Elevator)?
Abrir el archivo elevator.js y ejecutar node elevator.js.
Si se desea cambiar los valores, hacerlo aquí en el objeto:
`let elevator1 = new Elevator([5, 29, 13, 10], 4, {5:2, 29:10, 13:1, 10:1});`
Y finalmente ejecutar:
`elevator1.start();`
## ¿Cómo ejecutar el reto 19 (Knapsack)?
Abrir el archivo knapsack.js y ejecutar node knapsack.js
Si se desea cambiar los valores, hacerlo aquí en el objeto:
`let knapsack1 = new Knapsack(8, [2,3,4,5], [3,4,5,6]);`
Y finalmente ejecutar:
`console.log('Valor máximo:', knapsack1.selectItems());`
### Bonus Apex
Abrir el archivo en el developer console y abrir el open Execute Anonymous Windows. Luego abrir el siguiente código:
`Knapsack.main();`
