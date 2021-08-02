let quantidadeCartas = Number(prompt("Digite a quantidade de cartas"));
let cartasViradas = [];
let cartasViradasFiltradas = [];
let gifs = [];
let vetBool = [];
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
    for (let j = 0; j < quantidadeCartas; j++) {
        vetBool.push(false);
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

    for (let i = 0; i < li.length; i++) {
        if (elemento.innerHTML === li[i].innerHTML && i !== identificador) {
            bool1 = true;
            break;
        }
    }
    let turnCard = cartaVirada;
    let catchPlay = jogadaAnterior;

    if (bool1 === false && turnCard === 1) {
        
        setTimeout(function () {
            elemento.classList.remove("normal");
            elemento.innerHTML = `<img src="assets/front.png"/>`;
            li[catchPlay].classList.remove("normal");
            li[catchPlay].innerHTML = `<img src="assets/front.png"/>`;
            cartaVirada = 0;
        }, 1000);

    } else {
        vetBool[catchPlay] = true;
        vetBool[identificador] = true;
        
    }





    jogadaAnterior = identificador;
    cartaVirada++;
    
    if (cartaVirada === 2) {
        cartaVirada = 0;
    }
    


}