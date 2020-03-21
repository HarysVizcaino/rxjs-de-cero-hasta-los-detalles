import { interval , timer } from 'rxjs';

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
}


const interval$ = interval(1000);

// const timer$ = timer(2000);

const today5 = new Date();

today5.setSeconds(today5.getSeconds() + 5);

const timer$ = timer(today5 );

console.log('start');
timer$.subscribe(observer)
// interval$.subscribe(observer);
console.log('finish')