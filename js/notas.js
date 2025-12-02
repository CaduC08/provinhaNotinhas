var colorCont = 0

// insere nova nota
function adicionar() {
    var notaTexto = document.getElementById("notaTexto").value.trim()
    var tipoSelecionado = document.querySelector('input[name="urgencia"]:checked')

    if (!notaTexto) {
        alert("Não há nota para inserir")
        return // sai da função se o texto estiver vazio
    }

    var tipo = tipoSelecionado.value
    var novo = document.createElement("p")
    novo.textContent = notaTexto

    // ID único para cada nota
    novo.id = `nota_${tipo}_${Date.now()}`

    // alternar cores
    if (colorCont === 0) {
        novo.style.color = "blue"
        colorCont = 1
    } else if (colorCont === 1) {
        novo.style.color = "green"
        colorCont = 2
    } else {
        novo.style.color = "purple"
        colorCont = 0
    }

    var destino = tipo
    if(destino === "rNaoUrgente"){
        document.getElementById("naoUrgente").append(novo)
    } else {
        document.getElementById("urgente").append(novo)
    }
    // limpa o campo de texto
    document.getElementById("notaTexto").value = ""
}

// excluir uma nota não urgente
function excluir_nota_NU() {
    var notas = document.querySelectorAll("#naoUrgente p")
    if (notas.length > 0) {
        notas[notas.length - 1].remove()
    } else {
        alert("Não há notas para remover")
    }
}

// excluir uma nota urgente
function excluir_nota_U() {
    var notas = document.querySelectorAll("#urgente p")
    if (notas.length > 0) {
        notas[notas.length - 1].remove()
    } else {
        alert("Não há notas para remover")
    }
}

// excluir todas as notas
function apagarTudo(){
    var listaNao = document.querySelectorAll("#naoUrgente p")
    var listaUrgente = document.querySelectorAll("#urgente p")
    if(listaNao.length == 0 && listaUrgente.length == 0){
        alert("Não há notas para remover")
    }
    else {
        listaNao.forEach(listaNao => listaNao.remove())
        listaUrgente.forEach(listaUrgente => listaUrgente.remove())
    }
}

