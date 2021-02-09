const {from} = require('rxjs');
const {map} = require('rxjs/operators');


const notas = [6.7, 6, 1, 7.5, 4.9, 9.8, 7];

//const obs = from(notas);

/* obs.subscribe(nota =>{
    console.log(nota);
}) */

from(notas)
    .pipe( //fluxo q transforma os dados
        map(nota => nota >= 7 ? 'Aprovado' : 'Reprovado'),
        map(status => status[0])
    )
    .subscribe(status => { //resultado da transformação dos dados no pipe
        console.log(status);
    })