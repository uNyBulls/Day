// Função para mostrar o formulário com o tema selecionado
function mostrarFormulario(nome) {
  const container = document.getElementById('formulario-container');
  document.getElementById('tema').value = nome;

  // Mostrar o formulário com efeito de fade
  container.style.display = 'block';
  // Forçar o navegador a reconhecer a mudança de display antes de aplicar a classe
  requestAnimationFrame(() => {
    container.classList.add('show');
  });

  // Rolagem suave até o formulário
  container.scrollIntoView({ behavior: 'smooth' });

  // Colocar foco no primeiro campo do formulário
  document.getElementById('nome').focus();
}

// Esconder o formulário com efeito de fade
function esconderFormulario() {
  const container = document.getElementById('formulario-container');
  container.classList.remove('show');
  // Após a transição, esconder o container
  setTimeout(() => {
    container.style.display = 'none';
  }, 300);
}

// Manipulação do envio do formulário
(function() {
  const form = document.getElementById('orcamentoForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const email = form.email.value.trim();
    const endereco = form.endereco.value.trim();
    const tema = form.tema.value.trim();
    const dataFesta = form['data-festa'].value;
    const pagamento = form.pagamento.value;
    const mensagem = form.mensagem.value.trim();

    // Validação básica
    if (!nome || !telefone || !email || !endereco || !dataFesta || !pagamento || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Construção do texto para WhatsApp
    const textoWhats =
      `📋 *Solicitação de Orçamento*\n` +
      `----------------------------------\n` +
      `👤 *Nome:* ${nome}\n` +
      `📞 *Telefone:* ${telefone}\n` +
      `📧 *Email:* ${email}\n` +
      `📍 *Endereço:* ${endereco}\n` +
      `🎨 *Tema Escolhido:* ${tema}\n` +
      `📅 *Data para Festa:* ${dataFesta}\n` +
      `💳 *Método de Pagamento:* ${pagamento}\n` +
      `💬 *Mensagem:* ${mensagem}\n` +
      `----------------------------------\n` +
      `Obrigado pela preferência! 😊`;

    const numeroWhats = "5541996059852"; // seu número WhatsApp
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoWhats)}`;
    window.open(url, '_blank');

    // Opcional: esconder o formulário após o envio
    esconderFormulario();

    // Limpar o formulário após o envio
    form.reset();
  });
})();

// Código para a lightbox
document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('.card img');

  // Criar a lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  Object.assign(lightbox.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    cursor: 'pointer',
    display: 'none',
    flexDirection: 'column',
    padding: '10px'
  });

  // Criar a imagem no lightbox
  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '80%';

  // Criar o caption
  const caption = document.createElement('div');
  caption.id = 'lbCap';
  caption.style.color = '#fff';
  caption.style.marginTop = '10px';
  caption.style.textAlign = 'center';

  // Append elementos ao lightbox
  lightbox.appendChild(img);
  lightbox.appendChild(caption);
  document.body.appendChild(lightbox);

  // Evento para abrir a lightbox ao clicar na imagem
  imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
      img.src = imagem.src;
      caption.textContent = imagem.alt || '';
      lightbox.style.display = 'flex';
    });
  });

  // Fechar a lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});