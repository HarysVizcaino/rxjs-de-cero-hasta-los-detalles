import { of, from } from 'rxjs';


/**
 * of = take arguments and create a secuence
 * from = array, promise, iterable, observable
 */

const observable = {
    next: val => console.log('next', val),
    complete: () => console.log('completed')
}



// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5])


const source$ = from( fetch('https://api.github.com/users/klerith') );

source$.subscribe(resp => {
    console.log(resp);
})

// source$.subscribe( observable );

