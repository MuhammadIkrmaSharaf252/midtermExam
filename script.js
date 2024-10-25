document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.mobile-nav').classList.remove('hidden');
  });
  
  document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.mobile-nav').classList.add('hidden');
  });
  