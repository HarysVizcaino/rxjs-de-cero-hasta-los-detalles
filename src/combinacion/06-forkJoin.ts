import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";


const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) );
const letras$   = of('a', 'b', 'c').pipe( delay(3500) );

const obs4$ = forkJoin(
    numeros$,
    intervalo$,
    letras$
);

// obs4$.subscribe( console.log )

// obs4$.subscribe( resp => {
//     console.log('numero: ', resp[0]);
//     console.log('intervalo: ', resp[1])
//     console.log('letras: ', resp[2])

// } )


// print like and object
// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe( console.log )

// personalize names
forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe( console.log )