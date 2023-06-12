const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// Obtém a referência ao elemento com o ID 'liveAlertPlaceholder' e armazena na variável 'alertPlaceholder'

const appendAlert = (message, type) => {
  // Define uma função chamada 'appendAlert' que recebe dois parâmetros: 'message' e 'type'
  
  const wrapper = document.createElement('div')
  // Cria um novo elemento <div> e armazena na variável 'wrapper'

  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  // Define o conteúdo HTML do elemento 'wrapper' usando uma template string contendo classes CSS dinâmicas e mensagens

  alertPlaceholder.append(wrapper)
  // Adiciona o elemento 'wrapper' como filho do elemento 'alertPlaceholder' para exibição na interface
}

const alertTrigger = document.getElementById('liveAlertBtn')
// Obtém a referência ao elemento com o ID 'liveAlertBtn' e armazena na variável 'alertTrigger'

if (alertTrigger) {
  // Verifica se o elemento 'alertTrigger' existe

  alertTrigger.addEventListener('click', () => {
    appendAlert('OBRIGADA POR VER MEU SITE, VOCÊ É MUITO ESPECIAL')
  })
  // Adiciona um ouvinte de evento de clique ao elemento 'alertTrigger' que chama a função 'appendAlert' com uma mensagem 
}
