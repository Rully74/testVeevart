// Knapsack problem

// Clase del Knapsack
// Constructor que recibe un array (weigth) con los pesos, array (values) con los valores y la capacidad de la mochila
class Knapsack {
    constructor(capacity, weight, value){
        this.capacity = capacity;
        this.weight = weight;
        this.value = value;
    }

    selectItems(){
        // Inicialmente se evaluan los imputs para evitar errores
        if (this.weight == null || this.value == null || this.weight.length != this.value.length || this.capacity < 0) {
            console.log('Error información invalida para resolver el problema');
            return;
        }

        // Variable para obtener la cantidad de elementos
        let amountElements = this.weight.length;

        // Crear tabla para iterar y buscar los mejores resultados
        // Las filas (i) representan a los elementos y las columnas (j) las diferentes capacidades de la mochila
        //Inicializar las celdas inicialmente en cero
        let table = [];
        for (let i = 0; i <= amountElements; i++) {
            table[i] = [];
            for (let j = 0; j <= this.capacity; j++) {
                table[i][j] = 0;
            }
        }

        // Empezar a iterar la tabla para encontrar los mejores elementos y llenar la tabla
        // For para iterar los elementos
        for (let i = 1; i <= amountElements; i++) {
            // Obtener los valores individuales del peso del elemento
            let w = this.weight[i-1];
            // Obtener los valores individuales del valor del elemento
            let v = this.value[i-1];

            // For para recorrer las capacidades de la mochila
            for (let size = 1; size <= this.capacity; size++) {
                // Asignamos por defecto el valor del elemento anterior
                table[i][size] = table[i-1][size];
                // Comparamos si el valor del peso del elemento es mayor o igual a la capacidad de la mochila
                // y tambien si el valor superior anterior + el valor del elemento es mayor a la posicion actual
                if (size >= w && table[i-1][size-w] + v > table[i][size]) {
                    // Asignamos a la posicion actual el valor anterior + el valor actual
                    table[i][size] = table[i-1][size-w] + v;
                }
            }
        }

        // Ahora vamos a recorrer la tabla desde la ultima celda para encontrar los mejores elementos para seleccionarlos 
        // Variable para obtener la capacidad maxima de la mochila
        let size = this.capacity;
        // Array que almacenara los resultados de los mejores items seleccionados 
        let itemsSelected = [];

        // For para recorrer la tabla de abajo para arriba
        for (let i = amountElements; i > 0; i--) {
            // Comparamos si el valor actual es diferente al superior, si lo es significa que el elemento actual fue seleccionado
            if (table[i][size] != table[i-1][size]) {
                // Creamos una variable para guardar el indice del elemento seleccionado
                let itemIndex = i-1;
                // Se almacena en el array de elementos seleccionados para posteriormente mostarlo por consola
                itemsSelected.push(itemIndex);
                // Se reduce el size con el peso del elemento seleccionado para continuar con la logica
                size -= this.weight[itemIndex];
            }
        }

        // Por ultimo se imprimen los indices de los elementos seleccionados 
        console.log("Estos son los indices de los items seleccionados:", itemsSelected);
        // Se retorna el valor superior de la tabla que se encuentra en la parte inferior derecha (Ultima celda)
        return table[amountElements][this.capacity];
    }
}

// Se crea el objeto del tipo de Knapsack y se le envian los parametros que espera el constructor
let knapsack1 = new Knapsack(8, [2,3,4,5], [3,4,5,6]);
// Se ejecuta el metodo selectItems y se imprime su resultado por consola
console.log('Valor máximo:', knapsack1.selectItems());