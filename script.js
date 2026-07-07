// ==========================================
// 1. MENU LATERAL (SIDEBAR)
// ==========================================
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// ==========================================
// 2. EFEITO DE DIGITAÇÃO (HERO SECTION)
// ==========================================
const text = `// Inicializando algoritmo leme.reis...\n\nconst diagnostico = {\n  presencaDigital: false,\n  perdaClientes: "Diária",\n  solucao: "Site Otimizado de Alta Conversão"\n};\n\nif (diagnostico.presencaDigital === false) {\n  console.warn("Seu negócio está perdendo autoridade.");\n  console.log("Nós convertemos cliques em lucro real.");\n}\n\n// A decisão é simples: você vai agir agora ou ver seu concorrente crescer?`;

const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typing() {
    if (typingElement && charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typing, 30);
    }
}

// ==========================================
// 3. CARROSSEL DE DEPOIMENTOS INFINITO
// ==========================================
function initSlider() {
    const track = document.getElementById('testimonialTrack');
    if (!track) return;

    // Duplica os cards para o efeito de loop infinito visual
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Variáveis de controle de movimento
    let currentX = 0;
    let isDragging = false;
    let startX = 0;
    let animationId = null;
    const speed = 0.8; // Velocidade do autoplay automático

    // Função de Autoplay contínuo
    function autoPlay() {
        if (!isDragging) {
            currentX -= speed;
            
            // Se passar da metade do tamanho total (onde começam os clones), reseta para o início
            if (Math.abs(currentX) >= track.scrollWidth / 2) {
                currentX = 0;
            }
            track.style.transform = `translateX(${currentX}px)`;
        }
        animationId = requestAnimationFrame(autoPlay);
    }

    // Eventos para Dispositivos Móveis (Toque com o Dedo)
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX - currentX;
        cancelAnimationFrame(animationId); // Pausa o autoplay ao tocar
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX - startX;
        
        // Limita o arrasto para não ir além do conteúdo existente
        if (currentX > 0) currentX = 0;
        if (Math.abs(currentX) >= track.scrollWidth / 2) currentX = -(track.scrollWidth / 2) + 10;
        
        track.style.transform = `translateX(${currentX}px)`;
    }, { passive: true });

    track.addEventListener('touchend', () => {
        isDragging = false;
        autoPlay(); // Retoma o autoplay quando solta o dedo
    });

    // Eventos para Computadores (Arrastar com o Mouse)
    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        track.style.cursor = 'grabbing';
        startX = e.clientX - currentX;
        cancelAnimationFrame(animationId); // Pausa o autoplay ao clicar
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Evita selecionar textos acidentalmente ao arrastar
        currentX = e.clientX - startX;
        
        if (currentX > 0) currentX = 0;
        if (Math.abs(currentX) >= track.scrollWidth / 2) currentX = -(track.scrollWidth / 2) + 10;
        
        track.style.transform = `translateX(${currentX}px)`;
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            track.style.cursor = 'grab';
            autoPlay(); // Retoma o autoplay
        }
    });

    // Inicia o movimento automático inicial
    autoPlay();
}

// ==========================================
// 4. INICIALIZAÇÃO ÚNICA DO SISTEMA
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    typing();
    initSlider();
});