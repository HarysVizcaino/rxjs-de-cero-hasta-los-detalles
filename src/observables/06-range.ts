import { of, range, asyncScheduler } from 'rxjs';


// const src$ = of(1,2,3,4,5);

//async schedule become the range in async

const src$ = range(1,10, asyncScheduler);

console.log('start');
src$.subscribe(console.log)
console.log('finish')
