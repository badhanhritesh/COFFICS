const img = document.getElementById('myImage');
img.addEventListener('click', function() {
  img.classList.add('animate-bounce');
  setTimeout(() => img.classList.remove('animate-bounce'), 500); // Remove after animation
});
