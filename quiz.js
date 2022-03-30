const a1 = document.getElementById('A1')
const a2 = document.getElementById('A2')
const a3 = document.getElementById('A3')
const a4 = document.getElementById('A4')
const pergunta = document.getElementById('pergunta')
const numQuest = document.getElementById('numeroQuestao')
const container = document.querySelector('.container')
container.style.display='none'
const start = document.getElementById('Start')
const res = document.getElementById('res')
var cont = 0
const q = [3]

function iniciar() {
    container.style.display = 'block'
    pergunta.textContent = q[0].PerguntaQuestao
    a1.textContent = q[0].alternativa1
    a2.textContent = q[0].alternativa2
    a3.textContent = q[0].alternativa3
    a4.textContent = q[0].alternativa4
    numQuest.textContent =  `Pergunta 1/4`
    start.disabled = true
    start.style.display = 'none'

}

function clicar() {
    cont += 1
    numQuest.textContent =  `Pergunta ${cont}/4`
    disabled_btn()
    pergunta.textContent = q[cont].PerguntaQuestao
    a1.textContent = q[cont].alternativa1
    a2.textContent = q[cont].alternativa2
    a3.textContent = q[cont].alternativa3
    a4.textContent = q[cont].alternativa4
}

function disabled_btn(){
    if (cont == 4){
        a1.setAttribute("disabled", "disable")
        a2.setAttribute("disabled", "disable")
        a3.setAttribute("disabled", "disable")
        a4.setAttribute("disabled", "disable")
        
    }
    return true;
}

q[0] = {
    PerguntaQuestao: 'Quanto é 1 + 1 ?',
    alternativa1: '1',
    alternativa2: '2',
    alternativa3: '3',
    alternativa4: '4'
}

q[1] = {
    PerguntaQuestao: 'Quanto é 2 + 2 ?',
    alternativa1: '4',
    alternativa2: '5',
    alternativa3: '6',
    alternativa4: '7'
}

q[2] = {
    PerguntaQuestao: 'Quanto é 3 + 3 ?',
    alternativa1: '8',
    alternativa2: '9',
    alternativa3: '6',
    alternativa4: '0'
}

q[3] = {
    PerguntaQuestao: 'Quanto é 4 + 4 ?',
    alternativa1: '7',
    alternativa2: '2',
    alternativa3: '3',
    alternativa4: '8'
}


