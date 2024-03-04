document.addEventListener('DOMContentLoaded', function () {
    const floatingButton = document.getElementById('floating-button');
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');
    const inputMessage = document.getElementById('userInput');
    const chatBButton = document.querySelector('.chatB');

    floatingButton.addEventListener('click', function () {
        chatBox.style.display = (chatBox.style.display === 'none' || chatBox.style.display === '') ? 'block' : 'none';
    });

    if (chatBButton) {
        chatBButton.addEventListener('click', enviarMensagem);
    }

    chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> Olá! Eu sou o Buddy Bot.</p>`;
    chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> Antes de começarmos, por favor, digite seu nome:</p>`;
});

            let nome = '';
            let step = 0;

          function enviarMensagem() {
              const inputMessage = document.getElementById('userInput');
              const chatMessages = document.getElementById('chatMessages');

              const mensagem = inputMessage.value;
              if (mensagem.trim() !== '') {
                  chatMessages.innerHTML += `<p><strong>Você:</strong> ${mensagem}</p>`;

                  if (step === 0) {
                      nome = mensagem;
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> Muito prazer ${nome}, como eu posso ajudar você hoje?</p>`;
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> <br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      step++;
                  } else {
                      processarResposta(mensagem);
                  }

                  inputMessage.value = '';
              }
          }

          function processarResposta(resposta) {
              const chatMessages = document.getElementById('chatMessages');

              switch (resposta) {
                  case '1':
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> ${nome}, você pode entrar em contato com ela através do <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rebecacostadesa@gmail.com" target="_blank">email</a></p>`;
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> ${nome}, posso ajudar em mais alguma coisa?<br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      break;
                  case '2':
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> ${nome}, você pode ver os projetos dela ao final desta página ou acessando o <a href="https://github.com/Rebeca-Costa" target="_blank">github</a></p>`;
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> ${nome}, posso ajudar em mais alguma coisa?<br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      break;
                  case '3':
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> ${nome}, o linkedin dela é <a href="https://www.linkedin.com/in/rebeca-costa-48ab2921a/" target="_blank">este</a></p>`;
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> ${nome}, posso ajudar em mais alguma coisa?<br>[1] - Como entrar em contato com a Rebeca Costa? <br>[2] - Onde posso ver os projetos da Rebeca Costa? <br>[3] - Qual o Linkedin da Rebeca Costa? <br>[4] - Encerrar conversa</p>`;
                      break;
                  case '4':
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> Tudo bem, espero que eu tenha te ajudado. Até a próxima</p>`;
                      break;
                  default:
                      chatMessages.innerHTML += `<p><strong>Buddy Bot:</strong> Digite apenas as opções 1, 2, 3 ou 4</p>`;
              }
            }

// Cards dos Projetos
function updateSliderArrowsStatus(
  cardsContainer,
  containerWidth,
  cardCount,
  cardWidth
) {
  if (
    $(cardsContainer).scrollLeft() + containerWidth <
    cardCount * cardWidth + 15
  ) {
    $("#slide-right-container").addClass("active");
  } else {
    $("#slide-right-container").removeClass("active");
  }
  if ($(cardsContainer).scrollLeft() > 0) {
    $("#slide-left-container").addClass("active");
  } else {
    $("#slide-left-container").removeClass("active");
  }
}
$(function() {
  // Rolar productos
  let div = $("#cards-container");
  let cardCount = $(div)
    .find(".cards")
    .children(".card").length;
  let speed = 1000;
  let containerWidth = $(".container").width();
  let cardWidth = 250;

  updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

  //Remover as barras de rolagem
  $("#slide-right-container").click(function(e) {
    if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
      $(div).animate(
        {
          scrollLeft: $(div).scrollLeft() + cardWidth
        },
        {
          duration: speed,
          complete: function() {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          }
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });
  $("#slide-left-container").click(function(e) {
    if ($(div).scrollLeft() + containerWidth > containerWidth) {
      $(div).animate(
        {
          scrollLeft: "-=" + cardWidth
        },
        {
          duration: speed,
          complete: function() {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          }
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });

  // Atualizar largura do container
  $(window).resize(function() {
    try {
      containerWidth = $("#cards-container").width();
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    } catch (error) {
      console.log(
        `Erro ao Atualizar a Largura do container: 
            ${error}`
      );
    }
  });
});
