const a1 = document.getElementById('A1')
const a2 = document.getElementById('A2')
const a3 = document.getElementById('A3')
const a4 = document.getElementById('A4')
const pergunta = document.getElementById('pergunta')
const numQuest = document.getElementById('numeroQuestao')
const container = document.querySelector('.container')
const start = document.getElementById('Start')
const contagemAcertos = document.getElementById('pontosAcertos')
const voltar = document.getElementById('voltar')
var cont = 0
var acertos = 0
var nQuestao = 0
const q = [5]


// QUESTÕES

q[0] = {
    perguntaQuestao: 'Quanto é 3 x 3 ?',
    alternativa1: 1,
    alternativa2: 0,
    alternativa3: 9,
    alternativa4: 10,
    correta: 9,
}

q[1] = {
    perguntaQuestao: 'Quanto é 64 / 4 ?',
    alternativa1: 4,
    alternativa2: 8,
    alternativa3: 3,
    alternativa4: 7,
    correta: 8,
}

q[2] = {
    perguntaQuestao: 'Quanto é 15 + 13 ?',
    alternativa1: 8,
    alternativa2: 9,
    alternativa3: 6,
    alternativa4: 28,
    correta: 28,
}

q[3] = {
    perguntaQuestao: 'Quanto é 4 x 4 ?',
    alternativa1: 16,
    alternativa2: 2,
    alternativa3: 3,
    alternativa4: 8,
    correta: 16,
}

q[4] = {
    perguntaQuestao: 'Quanto é 5 x 4 ?',
    alternativa1: 16,
    alternativa2: 2,
    alternativa3: 20,
    alternativa4: 8,
    correta: 20,
}

q[5] = {
    perguntaQuestao: 'Quiz Finalizado',
    
}

// BOTÃO PARA INICICAR O QUIZ
function iniciar() {
    acertos = 0
    container.style.display = 'block'
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4
    start.style.display = 'none'

}

// FUNÇÕES DAS ALTERNATIVAS
function alternativa1() {
    if(q[nQuestao].alternativa1 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

function alternativa2() {
    if(q[nQuestao].alternativa2 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

function alternativa3() {
    if(q[nQuestao].alternativa3 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

function alternativa4() {
    if(q[nQuestao].alternativa4 == q[nQuestao].correta){
        acertos += 1
    }
    nQuestao += 1
    proximaQuestao()
    
}

// FUNÇÃO PARA AVANÇAR PARA AS PRÓXIMAS QUESTÕES
function proximaQuestao(){
    cont += 1
    sumirBotao()
    pergunta.textContent = q[cont].perguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4
    contagemAcertos.textContent = 'Acertos:' + acertos + '/5'
    
}



//FUNÇÃO PARA DESABILITAR OS BOTES APÓS O QUIZ
function sumirBotao(){
    if (cont == 5){
        a1.style.display = 'none'
        a2.style.display = 'none'
        a3.style.display = 'none'
        a4.style.display = 'none'
        voltar.style.display = 'block'
    }
    
}