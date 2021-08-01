let quantidadeCartas = Number(prompt("Digite a quantidade de cartas"));
let cartasViradas = [];
let cartasViradasFiltradas = [];
let gifs = [];

gifs.push("bobrossparrot");
gifs.push("explodyparrot");
gifs.push("fiestaparrot");
gifs.push("metalparrot");
gifs.push("revertitparrot");
gifs.push("tripletsparrot");
gifs.push("unicornparrot");


function verificadorDaQuantidadeCartas() {

    while (quantidadeCartas % 2 === 1 || (quantidadeCartas <= 2 || quantidadeCartas > 14) || !quantidadeCartas) {
        quantidadeCartas = Number(prompt("Digite a quantidade de cartas"));
    }
    
    gifs.sort(comparador);

    let i=0;

    while(i < quantidadeCartas/2){
        cartasViradas.push(gifs[i]);
        cartasViradas.push(gifs[i]);
        i++;
    }
  
    cartasViradas.sort(comparador);
    
}

verificadorDaQuantidadeCartas();

function carregarPagina(){
    let cartas = document.querySelector("ul");
    cartas.innerHTML ="";
    for(let i =0; i<quantidadeCartas; i++){
        cartas.innerHTML += `<li onclick="virarCarta(this)">
        <img src="assets/front.png"/>
        </li>`;
    }
}


function comparador() { 
	return Math.random() - 0.5; 
}

carregarPagina();

function virarCarta(elemento){
    elemento.classList.add("normal");
    elemento.innerHTML = `<img src="assets/bobrossparrot.gif"/>`;
}