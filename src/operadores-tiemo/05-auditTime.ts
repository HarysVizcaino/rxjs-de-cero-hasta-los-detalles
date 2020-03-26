import { fromEvent } from "rxjs";
import { sample, auditTime, tap } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap(val => console.log('tap', val)),
    auditTime(2000)
).subscribe( console.log )