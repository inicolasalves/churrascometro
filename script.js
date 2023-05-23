// Carne - 400g por pessoa + de 6 horas - 650g
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerantes/água - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

let inputAdultos = document.getElementById('ad');
let inputCriancas = document.getElementById('cr');
let inputDuracao = document.getElementById('dur');
let resultado = document.getElementById('resultado');

function calcular() {
    console.log('calculando...');
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebidas * adultos + (bebidas / 2 * criancas);

    console.log('Carne ' + qtdTotalCarne);
    console.log('Cerveja ' + qtdTotalCerveja);
    console.log('Bebidas ' + qtdTotalBebidas);

    resultado.innerHTML = `<h3>Você vai precisar de:</h3>`
    resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garafas de bebidas</p>`
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
