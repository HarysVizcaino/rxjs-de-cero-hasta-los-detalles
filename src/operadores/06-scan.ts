import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

// Reducer 

from(numbers).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log )


// Scan 
from(numbers).pipe(
    scan ( totalAcumulador, 0 )
)
.subscribe( console.log )

// Scan-Redux
interface User {
    id?: string;
    authenticate?: boolean;
    token?: string;
    edad?: number;
}

const user: User[] = [
    { id: 'fher', authenticate: false, token: null },
    { id: 'fher', authenticate: true, token: 'ABC' },
    { id: 'fher', authenticate: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<User>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log )