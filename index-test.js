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


let agenda = [
    { name: 'luis', phone: '12345'},
    { name: 'paco', phone: '4352'},
    { name: 'carmen', phone: '121019249345'},
    { name: 'manuel', phone: '85793'}

]

function search(list,searchString){
    return list.filter( (n) => n.name.match(searchString))
}


console.log(search(agenda,"l"))