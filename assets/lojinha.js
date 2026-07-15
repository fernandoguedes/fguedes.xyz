(() => {
  const modal = document.querySelector('.galeria-modal');
  if (!modal) return;

  const image = modal.querySelector('.galeria-imagem');
  const placeholder = modal.querySelector('.galeria-placeholder');
  const title = modal.querySelector('.galeria-titulo');
  const counter = modal.querySelector('.galeria-contador');
  const previousButton = modal.querySelector('.galeria-anterior');
  const nextButton = modal.querySelector('.galeria-proxima');
  const closeButton = modal.querySelector('.galeria-fechar');

  let items = [];
  let currentIndex = 0;
  let currentTrigger = null;

  document.querySelectorAll('[data-product-image]').forEach((productImage) => {
    productImage.addEventListener('error', () => {
      productImage.classList.add('is-unavailable');
    });
  });

  const renderImage = () => {
    const item = items[currentIndex];
    if (!item) return;

    image.classList.remove('is-unavailable');
    placeholder.hidden = true;
    image.alt = item.alt;
    image.src = item.src;
    counter.textContent = `Foto ${currentIndex + 1} de ${items.length}`;

    const hasMultipleImages = items.length > 1;
    previousButton.hidden = !hasMultipleImages;
    nextButton.hidden = !hasMultipleImages;
  };

  const move = (direction) => {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    renderImage();
  };

  const closeModal = () => {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
      modal.dispatchEvent(new Event('close'));
    }
  };

  document.querySelectorAll('.produto-galeria-abrir').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.produto-card');
      items = Array.from(card.querySelectorAll('[data-gallery-item]')).map((item) => ({
        src: item.dataset.src,
        alt: item.dataset.alt,
      }));

      if (!items.length) return;

      currentTrigger = trigger;
      currentIndex = 0;
      title.textContent = `${card.querySelector('.produto-artista').textContent} — ${card.querySelector('h2').textContent}`;
      renderImage();

      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
      document.body.classList.add('galeria-aberta');
      closeButton.focus();
    });
  });

  image.addEventListener('load', () => {
    image.classList.remove('is-unavailable');
    placeholder.hidden = true;
  });

  image.addEventListener('error', () => {
    image.classList.add('is-unavailable');
    placeholder.hidden = false;
  });

  previousButton.addEventListener('click', () => move(-1));
  nextButton.addEventListener('click', () => move(1));
  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key === 'ArrowLeft' && items.length > 1) {
      event.preventDefault();
      move(-1);
    }
    if (event.key === 'ArrowRight' && items.length > 1) {
      event.preventDefault();
      move(1);
    }
  });

  modal.addEventListener('close', () => {
    document.body.classList.remove('galeria-aberta');
    image.removeAttribute('src');
    if (currentTrigger) currentTrigger.focus();
  });
})();
