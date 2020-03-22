import { range, pipe, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';



const personaje = [
    {
        tipo: 'heroe',
        name: 'Batman'
    },
    {
        tipo: 'heroe',
        name: 'Robin'
    },
    {
        tipo: 'villano',
        name: 'Joker'
    }
]

const src$ = from(personaje)

src$.
pipe(
    filter((personaje) => personaje.tipo === 'heroe')
).subscribe((data) => console.log(data))

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(event => event === 'Enter')
)


keyup$.subscribe(console.log)

// range(1,10)
// .subscribe( console.log )


