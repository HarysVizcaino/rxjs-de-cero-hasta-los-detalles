import { fromEvent } from "rxjs";
import { map } from 'rxjs/operators';

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat mauris, iaculis interdum eros. Fusce a facilisis diam, vitae sollicitudin diam. Duis ornare nec felis ac lacinia. Sed eget faucibus elit. Pellentesque luctus ut nulla egestas vehicula. Nullam luctus dignissim nunc, ac scelerisque erat accumsan vitae. Phasellus semper, neque quis venenatis auctor, sapien tortor congue ligula, ut consequat enim est sit amet leo. Ut sit amet leo suscipit, finibus massa at, condimentum sapien.
<br /> <br />
Vestibulum rhoncus suscipit maximus. Ut quis nunc nisi. Suspendisse sit amet quam nec sem lacinia tempus sed a mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id lectus elementum nisl auctor blandit. Nulla consectetur semper imperdiet. Nulla ac vehicula metus, ut dignissim lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam maximus ligula sapien, vitae faucibus augue placerat in. Fusce ex lectus, hendrerit eu ligula sollicitudin, luctus vestibulum nunc. Donec molestie sem at nisi luctus hendrerit eleifend at purus.
<br /> <br />
Integer convallis elit quis nisi varius, non dapibus lorem efficitur. Nunc quis ligula porta, sagittis lacus non, viverra libero. Morbi viverra eget metus consectetur vulputate. Mauris pharetra vel dolor vel pharetra. Curabitur quam nulla, consectetur at faucibus sed, lobortis in nisi. Proin fermentum consequat felis nec feugiat. Donec pellentesque vulputate maximus. Curabitur egestas consequat purus at cursus. Aliquam ex leo, tincidunt eget nisl eu, pretium rhoncus elit. Praesent dapibus, erat tempor pretium maximus, justo risus posuere nisl, id congue urna quam fringilla leo.
<br /> <br />
Integer elementum facilisis lectus at sagittis. Aliquam congue laoreet felis eu consectetur. Cras placerat egestas blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus aliquam, sapien ut aliquet consequat, ligula risus aliquet massa, ut viverra erat quam a felis. Donec ut commodo augue, ut convallis enim. Sed malesuada eu est non posuere. Nunc ac vehicula dolor, sed fringilla felis. Donec id justo vel justo pulvinar tempor. Morbi faucibus vehicula ex eget tempor.
<br /> <br />
Nam non dui et nulla varius consequat in sit amet magna. Curabitur hendrerit est id massa pretium porttitor. Praesent non massa justo. Morbi velit leo, dapibus vel quam ut, lacinia elementum magna. Phasellus ullamcorper dui ac rhoncus tincidunt. Pellentesque sed sem et turpis dictum tincidunt vel id risus. Duis vitae rhoncus massa. Nullam eget iaculis dui, nec viverra massa.
`

const body = document.querySelector('body');

body.append(text);

const progressBar = document.createElement('div');

// function calculateScroll

const calculateScroll = ( event ) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;

    return (scrollTop / ( scrollHeight - clientHeight) ) * 100;

}

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map( calculateScroll )
);

progress$.subscribe((porcentaje) => {
    progressBar.style.width = `${porcentaje}%`;
})



scroll$.subscribe(() => {
    console.log('evento')
})