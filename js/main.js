// Função para inscrição 
function Inscricao() {
    window.location.href = "inscricoes.html";
}

function home(){
    window.location.href = "index.html";
}



//variáveis para o botão next e prev
let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length //2
let active = 0

// Função para atualizar o item ativo
function updateActive() {
    // Remover a classe 'active' de todos os itens
    list.forEach(item => item.classList.remove('active'));

    // Adicionar a classe 'active' ao item atual
    list[active].classList.add('active');
}

// Botão "next" 
next.onclick = () => {
    // Incrementar o índice ativo, e se passar do limite, voltar ao início
    active = active >= count - 1 ? 0 : active + 1;
    
    // Atualizar o item ativo
    updateActive();
    
    console.log("next");
}

// Botão "prev" 
prev.onclick = () => {
    // Decrementar o índice ativo, e se chegar no início, ir para o final
    active = active <= 0 ? count - 1 : active - 1;
    
    // Atualizar o item ativo
    updateActive();
    
    console.log("prev");
}


console.log(count);




//Efeito fade- in ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
  
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // remove observação depois de animar
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });


  //efeito fade-in ao carregar a pagina no banner
  window.addEventListener('load', () => {
    const banner = document.querySelector('.banner-content.fade-in');
    if (banner) {
      setTimeout(() => {
        banner.classList.add('visible');
      }, 100); // pequeno atraso para suavidade
    }
  });