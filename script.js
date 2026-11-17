const botoes = document.querySelectorAll('.faq__button');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';
    const resposta = document.getElementById(botao.getAttribute('aria-controls'));
    const icone = botao.querySelector('.faq__icon');

    botao.setAttribute('aria-expanded', String(!estaAberto));
    resposta.hidden = estaAberto;
    icone.src = estaAberto
      ? './assets/images/icon-plus.svg'
      : './assets/images/icon-minus.svg';
  });
});