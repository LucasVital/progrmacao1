const dragItems = document.querySelectorAll("[draggable='true']");
const dropItems = document.querySelectorAll(".drop__item");

dragItems.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("drag", drag);
    item.addEventListener("dragend", dragEnd);
});

function dragStart() {
    dropItems.forEach(dropItem => dropItem.classList.add("destaque"));

    this.classList.add("is-dragging");
}

function drag(event) {
    resultadoArrastado = event.currentTarget.textContent;

    return resultadoArrastado;
}

function dragEnd() {
    dropItems.forEach(dropItem => dropItem.classList.remove("destaque"));

    this.classList.remove("is-dragging");
}

dropItems.forEach(box => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
});

function dragEnter(event) {
    let operacao = event.currentTarget.textContent;
    operacao = operacao.replace("x", "*");
    operacao = operacao.replace(":", "/");
    arrayItem = operacao.split(" ");
    operacao = arrayItem[0] + arrayItem[1] + arrayItem[2];

    operacao = eval(operacao);

    if (parseInt(resultadoArrastado) === operacao) {
        this.classList.add("certo");
    }
}

function dragOver() {
    this.classList.remove("destaque");
    this.classList.add("hovered");

    const cartao_arrastado = document.querySelector(".is-dragging");

    this.appendChild(cartao_arrastado);
}

function dragLeave() {
    this.classList.remove("hovered");
    this.classList.add("destaque");
}
