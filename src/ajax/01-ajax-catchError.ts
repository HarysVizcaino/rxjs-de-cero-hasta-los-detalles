
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch( url );

ajax( url )
.pipe(
    map(resp => resp.response),
    catchError((err: AjaxError) => {
        console.warn(err);
        return of([]);
    })
)
.subscribe( console.log )