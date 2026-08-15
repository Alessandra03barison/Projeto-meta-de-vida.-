const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const tempoObjetivo = new Date("2026-12-30T00:00:00");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {

    const tempo = calculaTempo(tempoObjetivo);

    document.getElementById("dias0").textContent = tempo[0];
    document.getElementById("horas0").textContent = tempo[1];
    document.getElementById("min0").textContent = tempo[2];
    document.getElementById("seg0").textContent = tempo[3];

    document.getElementById("dias1").textContent = tempo[0];
    document.getElementById("horas1").textContent = tempo[1];
    document.getElementById("min1").textContent = tempo[2];
    document.getElementById("seg1").textContent = tempo[3];

    document.getElementById("dias2").textContent = tempo[0];
    document.getElementById("horas2").textContent = tempo[1];
    document.getElementById("min2").textContent = tempo[2];
    document.getElementById("seg2").textContent = tempo[3];

    document.getElementById("dias3").textContent = tempo[0];
    document.getElementById("horas3").textContent = tempo[1];
    document.getElementById("min3").textContent = tempo[2];
    document.getElementById("seg3").textContent = tempo[3];
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
