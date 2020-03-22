import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';


// range(1,5)
// .pipe(map<number, number>(val => {
//     return val * 10;
// }))
// .subscribe(console.log)

const src$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = src$.pipe(map((event) => event.code));

const keyupPluck$ = src$.pipe(pluck('target', 'baseURI'));

const keyupMapTop$ = src$.pipe(mapTo('Hello World'))

keyupCode$.subscribe(val => console.log('map', val));
keyupPluck$.subscribe(val => console.log('pluck', val));
keyupMapTop$.subscribe(val => console.log(val));
