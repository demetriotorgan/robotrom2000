
//Criando um Array com todos os elementos da classe .controle-ajuste
const controle = document.querySelectorAll("[data-controle]");
//console.log(controle); //exibi os 10 elementos do Array
const estatisticas = document.querySelectorAll("[data-estatisticas]")
	//console.log(estatisticas);

const pecas ={
	"bracos":{
		"forca":29,
		"poder":35,
		"energia": -21,
		"velocidade": -5
	},
	"blindagem":{
		"forca":41,
		"poder":20,
		"energia":0,
		"velocidade": -20
	},
	"nucleos":{
		"forca":0,
		"poder":7,
		"energia":48,
		"velocidade": -4
	},
	"pernas":{
		"forca":27,
		"poder":7,
		"energia":48,
		"velocidade": -4
	},
	"foguetes":{
		"forca":0,
		"poder":28,
		"energia":0,
		"velocidade": 2
	}

}

//Com o forEach descobrimos qual elemento foi clicado, retorna todos os elementos querySelectorAll
controle.forEach((elemento) =>{
	//console.log(elemento)
	elemento.addEventListener("click", (evento) =>{
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //para cada elemento da lista controle adicionamos a arrow function com addEventListener.
		//a propriedade target mostra todos os detalhes do evento que ocorreu
		//textContent pega o que está no value ou descrição do botao
		//o parentNode acessa o pai do elemento clicado
			atualizaEstatisticas(evento.target.dataset.peca);
		
	})
})

//criando a nova função manipulaDados
function manipulaDados(operacao, controle){
	const peca = controle.querySelector("[data-contador]");
	if(operacao === "-"){
		peca.value = parseInt(peca.value) - 1;
	} else{
		peca.value = parseInt(peca.value) + 1;
	}
}

function atualizaEstatisticas(peca){
	//console.log(pecas[peca]);
		estatisticas.forEach( (elemento)=>{
			console.log(elemento.dataset.estatisticas)
		//console.log(elemento.textContent)
			elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
		})
}