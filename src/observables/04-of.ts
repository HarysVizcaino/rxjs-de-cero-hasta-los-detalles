import { of } from 'rxjs';

const obs$ = of<number>(1,2,3,4,5,6);

obs$.subscribe(
    (value) => console.log('act', value),
    null,
    () => console.log('Completed')
)