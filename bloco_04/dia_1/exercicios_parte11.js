let salarioBruto = 15000;
let inss = 0;
let ir = 0;

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
