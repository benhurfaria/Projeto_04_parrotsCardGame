let quantidadeCartas = Number(prompt("Digite a quantidade de cartas"));
let cartasViradas = [];
let cartasViradasFiltradas = [];
let gifs = [];
let cartaVirada = 0;
let jogadaAnterior = 999;

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

    let i = 0;

    while (i < quantidadeCartas / 2) {
        cartasViradas.push(gifs[i]);
        cartasViradas.push(gifs[i]);
        i++;
    }

    cartasViradas.sort(comparador);

}

verificadorDaQuantidadeCartas();

function carregarPagina() {
    let cartas = document.querySelector("ul");
    cartas.innerHTML = "";
    for (let i = 0; i < quantidadeCartas; i++) {
        cartas.innerHTML += `<li onclick="virarCarta(this, ${i})">
        <img src="assets/front.png"/>
        </li>`;
    }
}


function comparador() {
    return Math.random() - 0.5;
}

carregarPagina();

function virarCarta(elemento, identificador) {
    const li = document.querySelectorAll("li");
    let bool1 = false;
    elemento.classList.add("normal");
    elemento.innerHTML = `<img src="assets/${cartasViradas[identificador]}.gif"/>`;

    for(let i=0; i < li.length; i++){
        if(elemento.innerHTML === li[i].innerHTML && i !== identificador){
            bool1 = true;
            break;
        }
    }
    
    if(bool1 === false && cartaVirada == 1){
        elemento.classList.remove("normal");
        elemento.innerHTML = `<img src="assets/front.png"/>`;
        li[jogadaAnterior].classList.remove("normal");
        li[jogadaAnterior].innerHTML = `<img src="assets/front.png"/>`
        cartaVirada = -1;
    } 

    jogadaAnterior = identificador;
    cartaVirada++;
    if(cartaVirada === 2){
        cartaVirada = 0;
    }
}