import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';


// const url = 'https://httpbin.org/delay/1';
const url = 'https://api.github.com/users?per_page=5';


const errorHandler = (error: AjaxError) => {
    console.warn(error.message);
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe( console.log )