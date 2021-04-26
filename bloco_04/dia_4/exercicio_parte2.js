//exercicio 1//

function verificaPalindrome(palavra) {

    let palavraAoContrario = '';

    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        palavraAoContrario += palavra[index];
    }
    if (palavra == palavraAoContrario) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
//verificaPalindrome ('carro')

//exercicio 2//

function indexMaiorValor(number) {
    let maior = number[0];
    for (let index = 1; index < number.length; index += 1) {
        if (number[index] > maior) {
            maior = index;
        }
    } console.log(maior)
}
//indexMaiorValor ([2, 3, 6, 7, 10, 1]);

//exercicio 3//

function indexMenorValor(number) {
    let menor = number[0];
    for (let index = 1; index < number.length; index += 1) {
        if (number[index] < menor) {
            menor = index;
        }
    } console.log(menor)
}
//indexMenorValor ([2, 4, 6, 7, 10, 0, -3]);

//exercicio 4//

function maiorNome(nomes) {
    let oMaiorDaLista = nomes[0];
    for (let index = 1; index < nomes.length; index += 1) {
        if (nomes[index].length > oMaiorDaLista.length) {
            oMaiorDaLista = nomes[index];
        }
    } console.log(oMaiorDaLista)
}
//maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

//exercicio 5//

function contaRepeticoes(numeros) {
    let somaTeste = 1;
    let guardarMaior = 0;
    for (let i in numeros) {
        somaTeste = 1;
        for (let j in numeros) {
            if (j != i && numeros[j] == numeros[i]) {
                somaTeste += 1
            }
        }
        if (somaTeste > guardarMaior) {
            guardarMaior = numeros[i];
        }
    }
    console.log(guardarMaior);
}

//contaRepeticoes([2, 3, 2, 5, 8, 2, 3]);

//exercicio 6//

function retornaSoma(n) {
    let somatorio = 0;
    let resultado = '';
    for (let index = 1; index <= n; index += 1) {
        somatorio += index
        if (index < n) {
            resultado += ' ' + index + ' +';
        }
        else {
            resultado += ' ' + index + ' ';
        }
    }
    console.log(resultado + '= ' + somatorio)
}
//retornaSoma(5)

//exercicio 7//

//Funcao que recebe uma palavra completa e o "suposto" final da mesma, retorna true se for o final e false se não for
function verificaFimPalavra(word, ending){
    //Achar o tamanho de ending para usar como parâmetro para caminha na palavra word
    let finalDeWord = "";
    let posicaoInicial = word.length - ending.length;
    //Caminhar na word, guardando em finalDeWord o final da palavra word
    for (let index = posicaoInicial; index < word.length; index += 1) {
        finalDeWord += word[index];
    }
    //comparar se finaldeword é igual a ending
    if(finalDeWord == ending){
        return true;
    }
        return false;
    }
    console.log(verificaFimPalavra("trybe","be"));