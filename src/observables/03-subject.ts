import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('valor', value),
    error: error => console.warn('error', error),
    complete: () => console.log('complete'),
}

const intervalo$ = new Observable<number>( subscriber => {
   
    const intervalId = setInterval(() => {
        subscriber.next( Math.random() );
    }, 1000)

    return () => {
        clearInterval(intervalId);
        console.log('destroyed observable');
    }
})

/*
* 1 - multiple cast
* 2 -  it is a observer too
* 3 - it have next, error y complete
*/


const subject$ = new Subject()

const subscription = intervalo$.subscribe( subject$ )

// const subs1 = intervalo$.subscribe( rnd => console.log('sub1',  rnd) )
// const subs2 = intervalo$.subscribe( rnd => console.log('sub2',  rnd) )

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )

    setTimeout(() => {
        subject$.next(10);
        subject$.complete();
        subscription.unsubscribe()
    }, 3500)