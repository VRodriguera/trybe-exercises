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

//console.log(listEstados);
        let varParent = document.querySelector('#estados')
        let varSon = document.createElement('option');
        varSon.value = Object.keys(recebeEstado[index]);
        varSon.innerText = Object.values(recebeEstado[index]);
        varParent.appendChild(varSon);
    }
}botaoEstados.addEventListener('click', () => {
    countries(recebeEstado);
});