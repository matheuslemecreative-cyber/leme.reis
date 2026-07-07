// Função para abrir/fechar menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if(sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Efeito de digitação
const text = `// Iniciando projeto leme.reis...\n\n> Seu site está perdendo dinheiro?\\ Gere autoridade e vendas na sua empresa. \\ Nós construímos a solução que converte cliques em lucro real. \\ A decisão é simples: <h1>Você vai agir agora, ou vai assistir o seu concorrente crescer?</h1>;`;
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typing() {
    if (typingElement && charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typing, 40);
    }
}

// Animação do Slider de Depoimentos
function initSlider() {
    const track = document.getElementById('testimonialTrack');
    if (!track) return;

    // Duplica os cards para o loop infinito
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let currentX = 0;
    const speed = 0.7; 

    function move() {
        currentX -= speed;
        if (Math.abs(currentX) >= track.scrollWidth / 2) {
            currentX = 0;
        }
        track.style.transform = `translateX(${currentX}px)`;
        requestAnimationFrame(move);
    }
    move();
}

// Inicializa tudo ao carregar a página
window.onload = function() {
    typing();
    initSlider();
};