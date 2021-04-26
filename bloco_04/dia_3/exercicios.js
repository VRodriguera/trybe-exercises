/*exercico 1
let n = 5;
for(let i = 0; i < n; i+=1){
    
    console.log('*****')
}*/

/*exercicio 2
let n = 5;
for(let x = 1; x <= n; x+=1){
    let str="";
    for(let y = 1; y <= x; y+=1) 
    str += "*";
   console.log(str)
}*/

/*exercicio 3
let numero = 5
let str = ""
//contar do 1 a 5 o número de linhas
for( let i = 1; i <= 5; i += 1){   
    str = ''
    //contar o número de espaços
for( let y = numero - i; y >= 1; y -= 1){ 
    str += " ";
}    
//contando o numero de asteriscos
for(let z = 1 ; z <= i; z += 1){
    str += "*"
}
console.log(str);
}*/

/*exercicios 4
let n = 5;
let str = "";

// contar linhas sempre IMPAR 
 for( let index = 1 ; index <= n ; index += 2  ){
//limpar str
    str = "";
// montar str "--" inicio
for( let jindex = 1 ; jindex <= (n-index)/2 ; jindex += 1){
    str += " ";
} 
// montar str "" meio
for( let kindex = 1 ; kindex <= index; kindex += 1){
    str += "*";
} 
// montar str "--" fim
for( let lindex = 1 ; lindex <= (n-index)/2; lindex += 1){
    str += " ";
}
 console.log(str)
}*/




