import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.post( url, {
//     id: 1,
//     nombre: 'Harys'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log )

ajax({
    url,
    headers: {
        'Content-Type': 'Application-Json'
    },
    body: {
        name: 'Hi'
    }
}).subscribe( console.log )