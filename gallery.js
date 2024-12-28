document.addEventListener("DOMContentLoaded", function () {
    const openGalleryButton = document.getElementById("openGallery");
    const closeGalleryButton = document.getElementById("closeGallery");
    const photoGallery = document.getElementById("photoGallery");
  
    // Abrir la galería
    openGalleryButton.addEventListener("click", () => {
      photoGallery.style.display = "block";
    });
  
    // Cerrar la galería
    closeGalleryButton.addEventListener("click", () => {
      photoGallery.style.display = "none";
    });
  
    // Cerrar la galería haciendo clic fuera del contenido
    photoGallery.addEventListener("click", (event) => {
      if (event.target === photoGallery) {
        photoGallery.style.display = "none";
      }
    });
  });
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  if (video) {
    video.muted = true; // Asegúrate de que esté silenciado
    video.play().catch(error => {
      console.error("Error al reproducir el video automáticamente:", error);
    });
  }
});
if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Título de la canción',
        artist: 'Artista',
        album: 'Álbum',
        artwork: [
            { src: 'Sin título-1.png', sizes: '192x192', type: 'image/png' },
            { src: 'Sin título-1.png', sizes: '512x512', type: 'image/png' }
        ]
    });

    // Opcional: Controlar reproducción y pausa desde el Centro de Control
    navigator.mediaSession.setActionHandler('play', () => {
        document.querySelector('audio').play();
    });
    navigator.mediaSession.setActionHandler('pause', () => {
        document.querySelector('audio').pause();
    });
}
