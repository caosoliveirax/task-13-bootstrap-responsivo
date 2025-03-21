// Gerenciar botões de sinopse
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

$(document).ready(function () {
  $(".carousel a").on("click", function (e) {
    var targetId = $(this).attr("href");
    var $targetCard = $(targetId);

    if ($targetCard.length) {
      $targetCard.removeClass("toggled");

      setTimeout(function () {
        $targetCard.addClass("toggled");
      }, 3000);
    }
  });
});


