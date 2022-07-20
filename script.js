var carta1 = {
  nome: "Ildris",
  imagem:
    "https://pm1.narvii.com/7170/c02d9915b4434e9669acc240751583814163f781r1-445-689v2_hq.jpg",
  raca: "elfo",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 9
  }
};

var carta2 = {
  nome: "Garko",
  imagem: "http://images.uncyc.org/pt/b/b8/An%C3%A3o_pegando_fogo.jpg",
  raca: "anao",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 0
  }
};

var carta3 = {
  nome: "Tanoy",
  imagem:
    "https://arburus.weebly.com/uploads/1/1/7/4/117406123/a670089a400d7d8878639598a89d4555_orig.jpg",
  raca: "humano",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 0
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  cartaMaquina = cartas[parseInt(Math.random() * 3)];
  cartaJogador = cartas[parseInt(Math.random() * 3)];

  while (cartaMaquina == cartaJogador) {
    sortearCarta();
  }

  console.log(cartaMaquina);
  console.log(cartaJogador);
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  //exibirOpcoes();
  exibirCartaJogador();
}

function exibirOpcoes() {
  //var opcoes = document.getElementById("opcoes");
  var texto = "";
  for (var atributo in cartaJogador.atributos) {
    texto +=
      "<input type='radio' name='atributo' value=" + atributo + ">" + atributo;
  }
  //opcoes.innerHTML = texto;
}

function atributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var selecionado = atributoSelecionado();
  var resultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[selecionado] > cartaMaquina.atributos[selecionado]
  ) {
    resultado.innerHTML = "<p class='resultado-final'>Você venceu !</p>";
  } else if (
    cartaJogador.atributos[selecionado] < cartaMaquina.atributos[selecionado]
  ) {
    resultado.innerHTML = "<p class='resultado-final'>Você perdeu !</p>";
  } else {
    resultado.innerHTML = "<p class='resultado-final'>Empate ! !</p>";
  }
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";
  var texto = "";

  //  JOGADOR
  for (var atributo in cartaJogador.atributos) {
    texto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHtml + texto + "</div>";
}

//  MAQUINA
function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHtml = "<div id='opcoes' class='carta-status'>";
  var texto = "";

  for (var atributo in cartaMaquina.atributos) {
    texto +=
      "<p type = 'text' name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHtml + texto + "</div>";
}