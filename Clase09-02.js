//console.log("Hola Mundo!");


/*
log("test log");

let o = new Object();
let m = new Map();
let numbers = new Array();
let numbers2 = [];

numbers[0] = 1;
numbers[1] = 2;

numbers.push(3);

log(numbers)

for (let i=0; i<numbers.length;i++) {
    log(i+": "+numbers[i]);
}


numbers = [5,6,7]

function log(msg) {
    console.log(msg);
}

numbers.forEach(log)
*/


let agenda = [{name:"luis", phone:605000999 },
{name:"pepe", phone:605000999 },
{name:"maria", phone:605000999 },
{name:"paco", phone:605000999 }]

function busqueda(ls, searchString) {
    return ls.filter( (n) => n.name.match(searchString));
}


console.log(busqueda(agenda,"p"));
//