import { range, pipe } from "rxjs";
import { tap, map } from 'rxjs/operators'


const number$ = range(1,5)

number$.pipe(
    tap((data) => console.log('before', data)),
    map(data => data * 10),
    tap((data) => console.log('before', data))
).subscribe(valor => console.log('sub', valor))