
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