var cardCiberJar = {
    nome: "Ciber Jar",
    icon: "https://static.wikia.nocookie.net/yugioh/images/5/51/CyberJar-OW.png/revision/latest/scale-to-width-down/250?cb=20140602003900",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cardWhiteDragon = {
    nome: "Blue eyes white dragon",
    icon: "https://www.jbox.com.br/wp/wp-content/uploads/2021/02/dragao-branco-destacada.jpg",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cardSkullServant = {
    nome: "Skull servant",
    icon: "https://i.kym-cdn.com/photos/images/facebook/001/104/309/443.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cardBatman = {
    nome: "Batman",
    icon: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

var cardMarvel = {
    nome: "Capitã Marvel",
    icon: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cardCiberJar, cardSkullServant, cardWhiteDragon, cardMarvel, cardBatman]
// 0          1           2

var gamerPoints = 0
var machinePoints = 0
updatePoints()

function updatePoints() {
    divPoints = document.getElementById('placar')
    var html = "Jogador" + "/" + machinePoints + " Máquina"
    divPoints.innerHTML = html
}

function drawCard() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    displayCardGamer()
    displayCardMachine()
    

}

function displayCardGamer() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.icon})`
    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}</p>` 
    var optionsText = ""

    for (var atributo in cartaJogador.atributos) {
        optionsText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='options' class='carta-status'>"
    divCartaJogador.innerHTML = moldura + nome + html + optionsText + '</div>'

    
    }

function displayCardMachine() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;"</p>';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.icon})`
    var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>` 
    var optionsText = ""

    for (var atributo in cartaMaquina.atributos) {
        optionsText += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='options' class='carta-status'>"
    divCartaMaquina.innerHTML = moldura + nome + html + optionsText + '</div>'
    
    
}
    

/*function displayOptions() {
    var options = document.getElementById('options')
    var optionsText = ""
    for (var atributo in cartaJogador.atributos) {
        optionsText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    options.innerHTML = optionsText
}*/
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function start() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
    divResultado.innerHTML = htmlResultado 
}
