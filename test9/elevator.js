// Elevator problem

// Clase del Elevator
// Constructor que recibe arreglo de pisos a los cuales el elevador será llamado en un orden definido,
// un piso inicial de ejecución y un mapa de pisos ingresados.
class Elevator {
    constructor(floorsArray, currentFloor, requestFloors){
        this.floorsArray = floorsArray;
        this.currentFloor = currentFloor;
        this.requestFloors = requestFloors;
        // Direccion del ascensor (up o down)
        this.stateElevator = 'up';
    }

    // Metodo start el cual iniciliza el programa 
    start(){
        // Para conocer cen que lugar empieza y que direccion tiene (up o down)
        console.log(`I start on floor ${this.currentFloor} and i'm going ${this.stateElevator}`);

        // Controla la ejecucion verificando que si exitan pisos por visitar
        while (this.floorsArray.length > 0){
            //Se verifica si el estado del elevador esta subiendo
            if(this.stateElevator === 'up'){
                //Se ejecuta el metodo que maneja el movimiento para arriba
                this.moveUp();
            } else if (this.stateElevator === 'down'){ // Se verifica si el estado del elevador esta bajando
                //Se ejecuta el metodo que maneja el movimiento para abajo
                this.moveDown();
            }
        }
    }

    // Metodo que maneja las request de los pisos para ser atendidas 
    requestManager(){
        // Imprime el piso actual del ascensor
        console.log(`Elevador on floor ${this.currentFloor}`);
        // Verificamos si el piso actual en el que esta el ascensor existe en el array de pisos a los cuales el elevador será llamado.
        if (this.floorsArray.includes(this.currentFloor)) {
            // Se imprime mensaje para confirmar que en este piso se detiene el elevator
            console.log(`Elevator stopping at the floor ${this.currentFloor}`);
            // Se filtra el array de los pisos a visitar, para borrar el piso actual
            this.floorsArray = this.floorsArray.filter(floor => floor !== this.currentFloor);

            // Se verifica si en el mapa de pisos existe un valor en el piso actual
            if (this.requestFloors[this.currentFloor] !== undefined) {
                // Se guarda el valor que existe en el mapa de pisos en una variable
                const newFloor = this.requestFloors[this.currentFloor];

                // Se verifica si el nuevo piso no existe en el array de pisos para no agregarlo dos veces
                if (!this.floorsArray.includes(newFloor)) {
                    // Se agrega el nuevo piso al array de pisos
                    this.floorsArray.push(newFloor);
                    // Mensaje de confirmacion
                    console.log(`New floor added: ${newFloor}`);
                }
            }
            // Se imprimen los pisos faltantes por recorrer
            console.log(`Remaining floors: ${this.floorsArray}`);
        }
        // Se imprime la direccion del elevator
        console.log(`Elevator going ${this.stateElevator}`);
    }

    //Metodo que controla el movimiento para arriba
    moveUp(){
        // Mientras el estado del elevador es up se ejecuta el metodo
        while (this.stateElevator === 'up') {
            // Se le suma una unidad al piso actual
            this.currentFloor++;
            //Validacion para detener el ciclo while. Este verifica si el piso actual es es mayor al piso maximo del array de pisos
            if (this.currentFloor > Math.max(...this.floorsArray)) {
                // Se cambia el estado del elevator a down
                this.stateElevator = 'down';
                break;
            }
            // Se invoca al metodo que maneja las request de los pisos
            this.requestManager();
        }
    }

    //Metodo que controla el movimiento para abajo
    moveDown(){
        // Mientras el estado del elevador es down se ejecuta el metodo
        while (this.stateElevator === 'down') {
            // Se le resta una unidad al piso actual
            this.currentFloor--;
            // Validacion para detener el ciclo while. Este verifica si el piso actual es es menor al piso minimo del array de pisos
            if (this.currentFloor < Math.min(...this.floorsArray)) {
                // Se cambia el estado del elevator idle finalizando la ejecucion
                this.stateElevator = 'idle';
                break;
            }
            // Se invoca al metodo que maneja las request de los pisos
            this.requestManager();
        }
    }
}

// Se crea el objeto del tipo de Elevator y se le envian los parametros que espera el constructor
let elevator1 = new Elevator([5, 29, 13, 10], 4, {5:2, 29:10, 13:1, 10:1});
elevator1.start();
