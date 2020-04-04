import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/internal/operators";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'HarysVizcaino';
// this thing work as a promise.all 'I think so'
forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    )
}).pipe(
    catchError(err => of(err))
).subscribe( console.log )