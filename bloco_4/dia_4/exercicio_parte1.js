let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
};
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "sim",
};

//console.log('Bem vinda, ' + info.personagem);

for (let i in info) {
    //console.log(info)
}

for (let key in info) {
    //console.log(key)
}

for (let i in info) {
    
    if (i == "recorrente" && info2.recorrente == 'sim' && info.recorrente == 'sim' ){
        console.log('Ambos recorrentes')
    }
    else{
        console.log(info[i] + ' e ' + info2[i])
    }   
}

/*ambosRecorentes (info.recorrente, info2.recorrente)

function ambosRecorentes (a , b) {
    if (a == "sim" && b == "sim"){
     console.log('Ambos recorrentes')
    }
}*/
