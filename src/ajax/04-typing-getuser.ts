import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<any>>( text => ajax.getJSON(
            `https://api.github.com/search/users?q=${ text }`
        )),
        mergeAll(),
        pluck('items')
).subscribe( respOb => {
   console.log(respOb);
} );