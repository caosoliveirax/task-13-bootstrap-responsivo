document.querySelectorAll('.toggleSinopseBtn').forEach((button) => {
    const sinopse = document.querySelector(button.dataset.bsTarget);
  
    if (!sinopse) return;
  
    const overlay = button.closest('.card-img-overlay');
    if (!overlay) return;
  
    const toggleOverlayClass = (action) => {
      overlay.classList[action]('overlay-active');
    };
  
    sinopse.addEventListener('show.bs.collapse', () => {
      button.textContent = '-';
      toggleOverlayClass('add');
    });
  
    sinopse.addEventListener('hide.bs.collapse', () => {
      button.textContent = '+';
      toggleOverlayClass('remove');
    });
  });
  