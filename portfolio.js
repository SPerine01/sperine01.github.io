var hoverItem = document.querySelector('.wrapper');

hoverItem.addEventListener('click', function(e) {
  e.preventDefault();
}, false);

hoverItem.addEventListener('mousemove', function(evt) {
  evt = (evt || event);
  
  hoverItem.style.backgroundPosition = (evt.clientX/20) + '%' + ' ' + (evt.clientY/20) + '%';
}, false);