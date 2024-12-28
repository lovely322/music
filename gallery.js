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
        title: 'ForNella',
        artist: 'Diego',
        album: 'Álbum',
        artwork: [
            { src: './favicon.png', sizes: '192x192', type: 'image/png' } // Ruta a tu favicon
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
