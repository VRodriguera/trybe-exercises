/*Refatorando alguns exercicios do dia 1 do bloco 4*/

//exercicio 1//

function soma(a , b){
    let total = a + b;
    console.log('Valor total da soma: ' + total);
}

function subtracao(a , b){
    let total = a - b;
    console.log('Valor total da subtração: ' + total);
}

function multiplicacao(a , b){
    let total = a * b;
    console.log('Valor total da multiplicação: ' + total);
}

function divisao(a , b){
    let total = a / b;
    console.log('Valor total da divisão: ' + total);
}

function modulo(a , b){
    let total = a % b;
    console.log('Valor total do módulo: ' + total);
}
soma (3 , 9);

//exercicio 2//

function comparaMaior (a , b){
if(a > b){
    console.log( a +' é maior')
}
else if(a < b){
    console.log(b +' é maior')
}
else{
    console.log('Deu Ruim')
}
}
comparaMaior (45 , 29);

//exercicio 3//

function comparaMaiorD3 (a , b , c){

if(a > b && a > c){
    console.log( a +' é maior')
}
else if(b > a && b > c){
    console.log( b +' é maior')
}
else{
    console.log( c +' é maior')
}
}
comparaMaiorD3 (123, 45, 600);

//exercicio 4//

function tipoDeNumero (valor){

if (valor > 0){
    console.log('Positive')
}
else if(valor < 0){
    console.log('Negative')
}
else{
    console.log('Zero')
}
}
tipoDeNumero (-90);

//exercicio 5//

function eTriangulo (ang1, ang2, ang3){

if(ang1+ang2+ang3 == 180){
    console.log('true')
}
else{
    console.log('false')
}
}
eTriangulo (170, 5, 5);

//exercicio 6//

function movimentoDaPeca (pecaDeXadrez){

if( pecaDeXadrez.toUpperCase() == 'BISHOP'){
    console.log('diagonals')
}
else{
    console.log('Esta peça não existe!')
}
}
movimentoDaPeca ('bishop');

//exercicio 7//

function converteNota (nota){

if(nota > 100 || nota < 0){
    console.log('Nota Invalida')
}
else if(nota >= 90){
    console.log('A')
}
else if(nota >= 80){
    console.log('B')
}
else if(nota >= 70){
    console.log('C')
}
else if(nota >= 60){
    console.log('D')
}
else if(nota >= 50){
    console.log('E')
}
else{
    console.log('F')
}
}
converteNota (70);

//exercicio 8//

function ePar (num1, num2, num3){

if(num1%2 == 0 || num2%2 == 0 || num3%2 == 0 ){
    console.log('true');
}
else{
    console.log('false')
}
}
ePar (7, 15, 22);

//exercicio 9//

function eImpar (num1, num2, num3){

if(num1%2 !== 0 || num2%2 !== 0 || num3%2 !== 0 ){
    console.log('true');
}
else{
    console.log('false')
}
}
eImpar (8, 14, 10);

//exercicio 10//

function lucroTutal (vCusto, vVenda){

const impostoSobreOCusto = 0.2 * vCusto;
const valorCustoTotal = vCusto + impostoSobreOCusto;
const lucro = vVenda - valorCustoTotal;

if(vVenda < 0 || vCusto < 0){
    console.log('Valores Invalidos')
}
else{
    console.log(lucro*1000)
}
}
lucroTutal (100, 250);

//exercicio 11//

function liquidoRecebido (salarioBruto, inss, ir){

//if para inss
if(salarioBruto <= 1556.94){
    inss = 0.08 * salarioBruto;
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = 0.09 * salarioBruto;
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = 0.11 * salarioBruto;
}
else {
    inss = 570.88;
}
//if para ir
if(salarioBruto >= 1.903,99 && salarioBruto <= 2826.65){
    ir = 0.075 * salarioBruto;
}
else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05){
    ir = 0.15 * salarioBruto;
}
else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    ir = 0.225 * salarioBruto;
}
else {
    ir = 0.275 * salarioBruto;
}
let salarioLiquido = salarioBruto - inss - ir;

console.log(salarioLiquido)
}
liquidoRecebido (15000, 0, 0);
