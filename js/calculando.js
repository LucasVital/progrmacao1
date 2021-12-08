acertos = 0;
erros = 0;

corrigir.addEventListener("click", () => {
    operacao_1();
    operacao_2();
    operacao_3();
    operacao_4();
    operacao_5();
    operacao_6();
    operacao_7();

    if (acertos > 0) {
        success.textContent = "Parabéns! você acertou " + acertos + " operações";
        success.style.visibility = "visible";
    } else {
        success.style.visibility = "hidden";
    }
    if (erros > 0) {
        error.style.visibility = "visible";
        error.textContent = "Opps! você errou " + erros + ". Tente novamente!";
    } else {
        error.style.visibility = "hidden";
    }
});

btn_tentar.addEventListener("click", () => {
    multiplicador_1.value = "";
    multiplicador_2.value = "";
    multiplicador_3.value = "";
    multiplicador_4.value = "";
    multiplicador_5.value = "";
    multiplicador_6.value = "";
    multiplicador_7.value = "";

    quociente_1.value = "";
    quociente_2.value = "";
    quociente_3.value = "";
    quociente_4.value = "";
    quociente_5.value = "";
    quociente_6.value = "";
    quociente_7.value = "";
    success.style.visibility = "hidden";
    error.style.visibility = "hidden";
    acertos = 0;
    erros = 0;
});

function operacao_1() {
    if (4 * parseInt(multiplicador_1.value) === 12 && 12 / 4 === parseInt(quociente_1.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}

function operacao_2() {
    if (3 * parseInt(multiplicador_2.value) === 30 && 30 / 3 === parseInt(quociente_2.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}

function operacao_3() {
    if (2 * parseInt(multiplicador_3.value) === 18 && 18 / 2 === parseInt(quociente_3.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}

function operacao_4() {
    if (5 * parseInt(multiplicador_4.value) === 40 && 40 / 5 === parseInt(quociente_4.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}

function operacao_5() {
    if (3 * parseInt(multiplicador_5.value) === 24 && 24 / 3 === parseInt(quociente_5.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}

function operacao_6() {
    if (4 * parseInt(multiplicador_6.value) === 32 && 32 / 4 === parseInt(quociente_6.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}

function operacao_7() {
    if (2 * parseInt(multiplicador_7.value) === 8 && 8 / 2 === parseInt(quociente_7.value)) {
        acertos = acertos + 1;
    } else {
        erros = erros + 1;
    }
}
