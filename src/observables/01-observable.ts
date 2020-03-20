import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('valor', value),
    error: error => console.warn('error', error),
    complete: () => console.log('complete'),
}

// const obs$ = new Observable( subs => {
//     subs.next('hola')
//     subs.next('mundo')

// } );

const obs$ = new Observable( subs => {
    subs.next('hola')
    subs.next('mundo')
    subs.complete()
} );

obs$.subscribe( observer )