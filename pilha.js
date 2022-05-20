var elementos = [];
var topo = -1;
var max = 10;

function push(num){
    if(topo < max){
        topo = topo + 1;
        elementos[topo] = num;
    }else{
        console.log("A pilha está cheia!")
    }
}

function estavazia(){
    return topo == -1;
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }else{
        console.log("A pilha está vazia");
    }
}

var numdecimal = 100;
var resto;


console.log("Empilhando tudo....")
while (numdecimal != 0){
    resto = parseInt(numdecimal % 2);
    push(resto)
    console.log(resto)
    numdecimal = parseInt(numdecimal / 2);
}


console.log("Desempilhando tudooo...")
while (!estavazia()){
    console.log(pop())
}
