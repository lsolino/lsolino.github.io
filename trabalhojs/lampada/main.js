window.addEventListener("load", function () {
	var lampada = document.getElementById('lamp').addEventListener("click", Lampada);
	var botao = document.getElementById('add').addEventListener("click", adicionarItem);
});

function Lampada() {
	var lampada = document.getElementById('lamp');
	if (lampada.src.match("lampada_on.gif")) {
		lampada.src = "lampada_off.gif";
	} else {
		lampada.src = "lampada_on.gif";
	}
}

function adicionarItem() {
	var novo_li = document.createElement("LI");
	var novo = document.getElementById('novo');
  	var new_item = document.createTextNode(novo.value);
  	novo_li.appendChild(new_item);
  	document.getElementById("lista").appendChild(novo_li);
  	novo.value = '';
}


