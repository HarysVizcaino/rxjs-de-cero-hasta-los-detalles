import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('Hola Mundo') 

/* note:
 *if you going go execute a interval dont pass arrow function
*/

// asyncScheduler.schedule(saludar, 0)

const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state)
    this.schedule(state + 1, 1000)
}, 1000, 0 )


// in this example with unsubscribe we are destroying the observer

setTimeout(() => {
    subs.unsubscribe();
}, 5000)