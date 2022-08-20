document.addEventListener('DOMContentLoaded', function() {
  const musicMenu = document.querySelector('.music-list-items');
  const musicBtn = document.querySelector('.menu-list-item__music');
  musicBtn.addEventListener('click', function() {
    const isHidden = musicMenu.classList.contains('hidden');
    if (isHidden) {
      musicMenu.classList.remove('hidden');
      musicBtn.classList.add('active');
    } else {
      musicMenu.classList.add('hidden');
      musicBtn.classList.remove('active');
    }
  });
});