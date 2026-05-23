   function toggleMenu() {
  let menu = document.getElementById("menuLateral");
  let overlay = document.getElementById("overlay");

  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
    overlay.style.display = "none";
  } else {
    menu.style.left = "0px";
    overlay.style.display = "block";
  }
}

function fecharMenu() {
  let menu = document.getElementById("menuLateral");
  let overlay = document.getElementById("overlay");

  menu.style.left = "-250px";
  overlay.style.display = "none";
}

let index = 0;
let slides = document.querySelectorAll(".slide");

function trocarSlide() {
  slides[index].classList.remove("ativo");

  index++;
  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("ativo");
}

setInterval(trocarSlide, 3000);

function agendar(servico, preco, tempo) {
  let numero = "5514997406083";

  let mensagem = `Olá!

Gostaria de agendar um horário.

Serviço: ${servico}.
Preço: ${preco}.
Duração: ${tempo}.

Qual a disponibilidade?`;

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}
function mudarSlide(carrossel, direcao) {
  // Encontra todos os slides do carrossel específico
  let slides = document.querySelectorAll(`#slide-${carrossel}-1, #slide-${carrossel}-2, #slide-${carrossel}-3, #slide-${carrossel}-4`);
  
  // Encontra qual slide está ativo
  let slideAtivo = document.querySelector(`#slide-${carrossel}-1.ativa, #slide-${carrossel}-2.ativa, #slide-${carrossel}-3.ativa, #slide-${carrossel}-4.ativa`);
  
  let indiceAtual = Array.from(slides).indexOf(slideAtivo);
  
  // Remove a classe ativa do slide atual
  slideAtivo.classList.remove("ativa");
  
  // Calcula o novo índice
  let novoIndice = indiceAtual + direcao;
  
  // Se passar do final, volta pro começo. Se passar do começo, vai pro final
  if (novoIndice >= slides.length) {
    novoIndice = 0;
  } else if (novoIndice < 0) {
    novoIndice = slides.length - 1;
  }
  
  // Adiciona a classe ativa ao novo slide
  slides[novoIndice].classList.add("ativa");
}
