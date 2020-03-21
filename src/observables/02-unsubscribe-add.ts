import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('valor', value),
    error: error => console.warn('error', error),
    complete: () => console.log('complete'),
}

const intervalo$ = new Observable<number>( subscriber => {

    // create a counter 
    let second = 0;
    const interval = setInterval(() => {
        // each second
        second++;
        subscriber.next(second);
        console.log(second);
    }, 1000)

    return () => {
        clearInterval(interval);
        console.log('interval destroyed');
    }
});

const subscription1 = intervalo$.subscribe(num => console.log('Num: ', num));
const subscription2 = intervalo$.subscribe(num => console.log('Num: ', num));
const subscription3= intervalo$.subscribe(num => console.log('Num: ', num));

subscription1.add(subscription2)
             .add(subscription3);

setTimeout(() => {
    // unsubscribe call the function that Observable return
    // for that we cleaned the tiemout in this function
    subscription1.unsubscribe();
    console.log('complete timeout')
}, 3000)