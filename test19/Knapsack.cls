// Knapsack problem

// Clase del Knapsack
// Constructor que recibe un array (weigth) con los pesos, array (values) con los valores y la capacidad de la mochila
public class Knapsack {
	Integer capacity;
    List<Integer> weight = new List<Integer>();
    List<Integer> value = new List<Integer>();
    
    public Knapsack(Integer capacity, List<Integer> weight, List<Integer> value){
        this.capacity = capacity;
        this.weight = weight;
        this.value = value;
    }
    
    public Integer selectItems(){
        // Inicialmente se evaluan los imputs para evitar errores
        if(this.weight == null || this.value == null || this.weight.size() != this.value.size() || this.capacity < 0){
            System.debug('Error información invalida para resolver el problema');
        }
        
        // Variable para obtener la cantidad de elementos
        Integer amountElements = this.weight.size();
        
        // Crear tabla para iterar y buscar los mejores resultados
        // Las filas (i) representan a los elementos y las columnas (j) las diferentes capacidades de la mochila
        //Inicializar las celdas inicialmente en cero
        List<List<Integer>> table = new List<List<Integer>>();
        for (Integer i = 0; i <= amountElements; i++) {
            List<Integer> row = new List<Integer>();
            for (Integer j = 0; j <= this.capacity; j++) {
                row.add(0);
            }
            table.add(row);
        }
        
        // Empezar a iterar la tabla para encontrar los mejores elementos y llenar la tabla
        // For para iterar los elementos
        for (Integer i = 1; i <= amountElements; i++) {
            // Obtener los valores individuales del peso del elemento
            Integer w = this.weight.get(i-1);
            // Obtener los valores individuales del valor del elemento
            Integer v = this.value.get(i-1);

            // For para recorrer las capacidades de la mochila
            for (Integer size = 1; size <= this.capacity; size++) {
                // Asignamos por defecto el valor del elemento anterior
                table.get(i).add(size, table.get(i-1).get(size));
                // Comparamos si el valor del peso del elemento es mayor o igual a la capacidad de la mochila
                // y tambien si el valor superior anterior + el valor del elemento es mayor a la posicion actual
                if (size >= w && table.get(i-1).get(size-w) + v > table.get(i).get(size)) {
                    // Asignamos a la posicion actual el valor anterior + el valor actual
                    table.get(i).add(size, table.get(i-1).get(size-w) + v);
                }
            }               
        }
                    
        // Ahora vamos a recorrer la tabla desde la ultima celda para encontrar los mejores elementos para seleccionarlos 
        // Variable para obtener la capacidad maxima de la mochila
        Integer size = this.capacity;
        // Array que almacenara los resultados de los mejores items seleccionados 
        List<Integer> itemsSelected = new List<Integer>();

        // For para recorrer la tabla de abajo para arriba
        for (Integer i = amountElements; i > 0; i--) {
            // Comparamos si el valor actual es diferente al superior, si lo es significa que el elemento actual fue seleccionado
            if (table.get(i).get(size) != table.get(i-1).get(size)) {
                // Creamos una variable para guardar el indice del elemento seleccionado
                Integer itemIndex = i-1;
                // Se almacena en el array de elementos seleccionados para posteriormente mostarlo por consola
                itemsSelected.add(itemIndex);
                // Se reduce el size con el peso del elemento seleccionado para continuar con la logica
                size -= this.weight.get(itemIndex);
            }
        }

        // Por ultimo se imprimen los indices de los elementos seleccionados 
        System.debug('Estos son los indices de los items seleccionados:' + itemsSelected);
        // Se retorna el valor superior de la tabla que se encuentra en la parte inferior derecha (Ultima celda)
        return table.get(amountElements).get(this.capacity);
    }
                
    public static void main() {
    // Se crea el objeto del tipo de Knapsack y se le envian los parametros que espera el constructor
        Knapsack knapsack1 = new Knapsack(8, new List<Integer>{2,3,4,5}, new List<Integer>{3,4,5,6});
	// Se ejecuta el metodo selectItems y se imprime su resultado por consola
		System.debug('Valor máximo:' + knapsack1.selectItems());
    }
}