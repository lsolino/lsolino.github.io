window.addEventListener("load", function () {
	var botao_1 = document.getElementById('enlace_1').addEventListener("click", Ocultar_1);
	var botao_2 = document.getElementById('enlace_2').addEventListener("click", Ocultar_2);
	var botao_3 = document.getElementById('enlace_3').addEventListener("click", Ocultar_3);
});

function Ocultar_1 () {

  var paragrafo = document.getElementById('conteudo_1');
  var link = document.getElementById('enlace_1');
	if (paragrafo.style.display === 'block') {
		paragrafo.style.display = 'none';
		link.textContent = 'Mostrar Conteúdo';
	} else {
		paragrafo.style.display = 'block';
		link.textContent = 'Ocultar Conteúdo';
	}

}


function Ocultar_2 () {

  var paragrafo = document.getElementById('conteudo_2');
  var link = document.getElementById('enlace_2');
	if (paragrafo.style.display === 'block') {
		paragrafo.style.display = 'none';
		link.textContent = 'Mostrar Conteúdo';
	} else {
		paragrafo.style.display = 'block';
		link.textContent = 'Ocultar Conteúdo';
	}

}

function Ocultar_3 () {

  var paragrafo = document.getElementById('conteudo_3');
  var link = document.getElementById('enlace_3');
	if (paragrafo.style.display === 'block') {
		paragrafo.style.display = 'none';
		link.textContent = 'Mostrar Conteúdo';
	} else {
		paragrafo.style.display = 'block';
		link.textContent = 'Ocultar Conteúdo';
	}

}
