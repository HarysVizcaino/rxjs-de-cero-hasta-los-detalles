import { interval } from 'rxjs';
import { take, reduce } from 'rxjs/operators';

const number = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

interval(1000).pipe(
    take(3),
    reduce(totalReducer), 
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete'),
})