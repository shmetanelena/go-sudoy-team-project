(() => {
  let btns = document.querySelectorAll('.products-list__button');
  btns.forEach(function(item) {
  item.addEventListener('click', function() {
     item.closest('.products-list__item').querySelector('.modal').classList.toggle('is-hidden');
    });
  });
})();
