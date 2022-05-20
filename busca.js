//busca sequencial
// var valores = [10,30,55,45,80,90];

// function buscar(num){
//     for(i=0 ;i < 6; i++){
//         if (num == valores[i]){
//             return i;
//         }
//     }
//     return -1
// }

//busca binaria
var valores = [10,30,46,55,80,90,100,110,120,130];

function buscar(num){
    let inicio,meio,fim;
    inicio=0;
    fim=9;

    while(inicio <= fim){
        meio = parseInt((inicio + fim) / 2);
        if(num == valores[meio]){
            return meio;
        }else{
            if(num > valores[meio]){
        
                inicio = meio + 1;
            }else{
                fim = meio - 1;
            }
        }
    }
    return -1
}

console.log(buscar(46))

// console.log(buscar(46))