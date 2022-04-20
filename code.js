// helloWorld function 
let helloWorld = function() {
    return "Hello, World!";
}

function plusOne(x){
    if(typeof x === 'number'){
        return x + 1;
    }
    return 0;
}

function sayHello(name) {
    return ("Hello, " + name + "!");
}

function nameInArray(str){
     if(typeof str === 'string'){
         return str.split("");
     }
     return false;
}


console.log(nameInArray(123))





