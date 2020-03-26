import { fromEvent } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged } from 'rxjs/operators';


// ejemplo 1
const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(1000),
).subscribe( console.log )

// ejemplo 2

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<any>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log )