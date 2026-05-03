function toggleGallery(name) {
  const gallery = document.getElementById('gallery-' + name);
  const isOpen = gallery.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
