let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let maior = 0;

//for(let i = 0; i < numbers.length; i++){
   //total += numbers[i]
//}
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maior){
        maior = numbers[i]
    }
 }
 console.log(maior)

//let media = total / numbers.length

//if(media > 20){
  //  console.log('valor maior que 20')
//}
//else{
  //  console.log('valor menor que 20')
//}

//console.log(numbers.length); 
//console.log(total);
//console.log(media)