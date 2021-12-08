acertos2 = 0;
erros2 = 0;

btn_comparacao.addEventListener("click", () => {
    operacao2_1();
    operacao2_2();
    operacao2_3();
    operacao2_4();
    operacao2_5();
    operacao2_6();
    operacao2_7();
    operacao2_8();

    if (acertos2 > 0) {
        success2.textContent = "Parabéns! você acertou " + acertos2 + ".";
        success2.style.visibility = "visible";
    } else {
        success2.style.visibility = "hidden";
    }
    if (erros2 > 0) {
        error2.style.visibility = "visible";
        error2.textContent = "Opps! você errou " + erros2 + ". Tente novamente!";
    } else {
        error2.style.visibility = "hidden";
    }
});

btn_tentar2.addEventListener("click", () => {
    quociente2_1.value = "";
    quociente2_2.value = "";
    quociente2_3.value = "";
    quociente2_4.value = "";
    quociente2_5.value = "";
    quociente2_6.value = "";
    quociente2_7.value = "";
    quociente2_8.value = "";

    quociente3_1.value = "";
    quociente3_2.value = "";
    quociente3_3.value = "";
    quociente3_4.value = "";
    quociente3_5.value = "";
    quociente3_6.value = "";
    quociente3_7.value = "";
    quociente3_8.value = "";

    success2.style.visibility = "hidden";
    error2.style.visibility = "hidden";
    acertos2 = 0;
    erros2 = 0;
});

function operacao2_1() {
    let op1 = 35 / 7;
    let op2 = 10 / 2;
    let comparacao = caixa_1.value;

    if (op1 == parseInt(quociente2_1.value) && op2 == parseInt(quociente3_1.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_2() {
    let op1 = 48 / 8;
    let op2 = 42 / 7;
    let comparacao = caixa_2.value;

    if (op1 == parseInt(quociente2_2.value) && op2 == parseInt(quociente3_2.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_3() {
    let op1 = 81 / 9;
    let op2 = 45 / 5;
    let comparacao = caixa_3.value;

    if (op1 == parseInt(quociente2_3.value) && op2 == parseInt(quociente3_3.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_4() {
    let op1 = 25 / 5;
    let op2 = 20 / 5;
    let comparacao = caixa_4.value;

    if (op1 == parseInt(quociente2_4.value) && op2 == parseInt(quociente3_4.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_5() {
    let op1 = 21 / 3;
    let op2 = 72 / 9;
    let comparacao = caixa_5.value;

    if (op1 == parseInt(quociente2_5.value) && op2 == parseInt(quociente3_5.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_6() {
    let op1 = 18 / 9;
    let op2 = 12 / 6;
    let comparacao = caixa_6.value;

    if (op1 == parseInt(quociente2_6.value) && op2 == parseInt(quociente3_6.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_7() {
    let op1 = 36 / 4;
    let op2 = 24 / 3;
    let comparacao = caixa_7.value;

    if (op1 == parseInt(quociente2_7.value) && op2 == parseInt(quociente3_7.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}

function operacao2_8() {
    let op1 = 45 / 9;
    let op2 = 36 / 4;
    let comparacao = caixa_8.value;

    if (op1 == parseInt(quociente2_8.value) && op2 == parseInt(quociente3_8.value)) {
        if (comparacao === "=") {
            if (op1 === op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === ">") {
            if (op1 > op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else if (comparacao === "<") {
            if (op1 < op2) {
                acertos2 = acertos2 + 1;
            } else {
                erros2 = erros2 + 1;
            }
        } else {
            erros2 = erros2 + 1;
        }
    } else {
        erros2 = erros2 + 1;
    }
}
