//Atividade 07
//programa para calculo de fatorial

//gerando numero para fatorial
var num  = Math.floor(Math.random() * 16);
console.log(num);

//criando funcao para fatorar
function fatorial(x) {
    if (x < 0) 
        return -1;
    else if (x == 0) 
        return 1;
    else {
        return (x * fatorial(x - 1));
    }
}


console.log(fatorial(num));

