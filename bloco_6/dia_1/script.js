let botaoEstados = document.getElementById('estados');
let recebeEstado = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' }
];

function countries(recebeEstado) {

    for (let index = 0; index < recebeEstado.length; index += 1) {

        let varParent = document.querySelector('#estados')
        let varSon = document.createElement('option');
        varSon.value = Object.keys(recebeEstado[index]);
        varSon.innerText = Object.values(recebeEstado[index]);
        varParent.appendChild(varSon);

    }
}
window.addEventListener('load', countries(recebeEstado));


////////////////////////////////////////////////////////////////////////////////


function checkData() {

    let dataTest = '13/03/2021';
    let dia, mes, ano = '';

    dia = dataTest.split('/')[0];
    mes = dataTest.split('/')[1];
    ano = dataTest.split('/')[2];

    
    if (dia.length != 2 || mes.length != 2 || ano.length != 4) {
        alert('Formato invalido!')
        return false;
    }  
    if (dia < 0 || dia > 31) {
        alert('Dia informado invalido!')
        return false;
    }
    if (mes < 0 || mes > 12) {
        alert('Mês informado invalido!')
        return false;
    }
    if (ano < 0) {
        alert('Ano informado invalido!')
        return false;
    }
    return true;
}
checkData()

function submitForm () {

    let inputValue = document.getElementsByTagName('input');
    let varParent = document.querySelector('#paragrafoItem')
    let varSon = document.createElement('div');
    varSon.setAttribute('id', 'minhaDiv')
    varParent.appendChild(varSon);
    let arrTest = [];
    
    for (let index in inputValue) {

       if (inputValue[index] != undefined) {
        arrTest.push(inputValue[index].value);
       }
    }

    varSon.innerText = arrTest.join(' ')
    console.log(varSon);
}
const buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener('click', () =>{
      submitForm ();
});

function clear () {


    document.getElementById('minhaDiv').innerText = '';

     
     document.getElementById("form").reset();
     console.log('Olha eu aqui'); 

}
const buttonClear = document.getElementById('clearForm');
buttonClear.addEventListener('click', () =>{
    clear ();
});   