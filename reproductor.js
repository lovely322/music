window.addEventListener('load', iniciarReproductor);

let idFrame, reproduciendo = 0;
let listadoCanciones = [
  {
    titulo: 'Billie Eilish - WILDFLOWER',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba1.mp3',
    caratulaUrl: 'https://images.genius.com/9d5264bad7c4f816de9a75eb78689d32.1000x1000x1.png'
  },
  {
    titulo: 'Cigarettes After Sex - Cry',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba2.mp3',
    caratulaUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Cigarettes_After_Sex_-_Cry.png'
  },
  {
    titulo: 'Cigarettes After Sex - John Wayne',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba3.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b27312b69bf576f5e80291f75161'
  },
  {
    titulo: 'Lana del Rey - Salvatore',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba5.mp3',
    caratulaUrl: 'https://i1.sndcdn.com/artworks-000271546052-hs8vbr-t500x500.jpg'
  },
  {
    titulo: 'Lana del Rey - Ultraviolence',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba6.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
  },
  {
    titulo: 'The Fray - Look After You',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba8.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b27359b8b957f164ce660919f1f4'
  },
  {
    titulo: 'The Weeknd - A Lesser Man',
    audioUrl: 'https://ia904507.us.archive.org/24/items/prueba9_202502/prueba9.mp3',
    caratulaUrl: 'https://i1.sndcdn.com/artworks-9Aq6acxZuTsJ-0-t500x500.jpg'
  },
  {
    titulo: 'Bryan Adams - Heaven',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/1.mp3',
    caratulaUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Bryanadams_-_Heaven_Cover.jpg'
  },
  {
    titulo: 'Camila — Todo Cambió',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/2.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b273eedc6a78236f3666ca7ffcf5'
  },
  {
    titulo: 'Chase Atlantic - Run Away',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/3.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2730a9604c3074667648297b31c'
  },
  {
    titulo: 'Felix Jaehn - Aint Nobody (Loves Me Better) ft. Jasmine Thompson',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/4.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2739713f1939e377cf85a2a5b16'
  },
  {
    titulo: 'Isabel LaRosa - im yours',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/5.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2737f73e6587c8ced7cad6e1e02'
  },
  {
    titulo: 'Michael Jackson - Rock With You',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/6.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac'
  },
  {
    titulo: 'Roxette - Listen to Your Heart',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/7.mp3',
    caratulaUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/ListenToYourHeart.jpg/220px-ListenToYourHeart.jpg'
  },
  {
    titulo: 'Roxette -It Must Have Been Love',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/8.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2733351044c5cdf6937161fdb4d'
  },
  {
    titulo: 'The Weeknd - Call Out My Name',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/9.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730'
  },
  {
    titulo: 'The 1975 - Robbers',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/10.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730'
  },
  {
    titulo: 'The Weeknd - All Day Love',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/11.mp3',
    caratulaUrl: 'https://i1.sndcdn.com/artworks-IEh25V6RYczsjUk5-pN6jdA-t500x500.jpg'
  },
  {
    titulo: 'Bad Bunny (ft. Bomba Estéreo) - Ojitos Lindos',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/12.mp3',
    caratulaUrl: 'https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72'
  },
  {
    titulo: 'Reik - Sabes',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/13.mp3',
    caratulaUrl: 'https://cdn-images.dzcdn.net/images/cover/75667ab1c526ea6a141480991c3a87c1/1900x1900-000000-80-0-0.jpg'
  },
  {
    titulo: 'The Weeknd - Die For You',
    audioUrl: 'https://ia800104.us.archive.org/28/items/11_20250203_202502/14.mp3',
    caratulaUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/The_Weeknd_-_Die_for_You.png'
  },
  

  // Añade el resto de tus canciones aquí con este formato
];

let icono = [];
let cancion = {
  audio: new Audio(),
  URI: '',
  caratula: '',
  duracion: ''
};
let reproductor = {
  nodo: '',
  duracion: '',
  caratula: '',
  deslizador: [],
  boton: []
};




icono['pausa'] = 'bi-pause-circle-fill';
icono['reproducir'] = 'bi-play-circle-fill';
icono['volumenSilenciado'] = 'bi bi-volume-mute-fill';
icono['volumenBajo'] = 'bi bi-volume-down-fill';
icono['volumenAlto'] = 'bi bi-volume-up';

function iniciarReproductor() {
  reproductor.boton['reproducirPausa'] = document.querySelector('.controles__reproduccion .' + icono['reproducir']).parentElement;
  reproductor.boton['cancionSiguiente'] = document.querySelector('.controles__reproduccion .bi-skip-forward-fill').parentElement;
  reproductor.boton['cancionAnterior'] = document.querySelector('.controles__reproduccion .bi-skip-backward-fill').parentElement;
  reproductor.boton['volumen'] = document.querySelector('.controles__volumen button');
  reproductor.deslizador['volumen'] = document.querySelector('.controles__volumen input');
  reproductor.deslizador['progresoCancion'] = document.querySelector('.reproduccion__progreso input');

  reproductor.caratula = document.querySelector('.cancion__caratula img');
  reproductor.duracion = document.querySelector('.reproduccion__progreso time');
  reproductor.nodo = document.querySelector('.reproductor');

  reproductor.boton['reproducirPausa'].addEventListener('click', alternarReproduccion);
  reproductor.boton['cancionSiguiente'].addEventListener('click', () => cargarCancion(1));
  reproductor.boton['cancionAnterior'].addEventListener('click', () => cargarCancion(-1));
  reproductor.boton['volumen'].addEventListener('click', alternarDeslizadorVolumen);
  document.addEventListener('click', alternarDeslizadorVolumen);
  reproductor.deslizador['volumen'].addEventListener('input', moverVolumen);
  reproductor.deslizador['progresoCancion'].addEventListener('input', moverProgreso);

  reproductor['caratula'].style.animationPlayState = 'paused';

  cargarCancion(reproduciendo);
}

function moverProgreso(e) {
  let momento = e.target.value;
  cancion.audio.currentTime = momento;
}

function cargarCancion(sentido) {
  let cambiarA = reproduciendo + sentido;
  reproductor.caratula.classList.add('oculto');

  if (cambiarA >= listadoCanciones.length) reproduciendo = 0;
  else if (cambiarA < 0) reproduciendo = listadoCanciones.length - 1;
  else reproduciendo = cambiarA;

  // Cargar desde URLs en la nube
  cancion.URI = listadoCanciones[reproduciendo].audioUrl;
  cancion.caratula = listadoCanciones[reproduciendo].caratulaUrl;
  cancion.audio.src = cancion.URI;

  reproductor.caratula.src = cancion.caratula;
  reproductor.caratula.classList.remove('oculto');

  reproductor.deslizador['progresoCancion'].value = 0;

  cancion.audio.addEventListener('loadedmetadata', () => {
    cambiarCancion();
  });

  cancion.audio.addEventListener('error', (e) => {
    console.error('Error al cargar el audio:', e);
    // Puedes añadir aquí un manejo de errores visual
  });
  cancion.audio.addEventListener('ended', () => {
    cargarCancion(1);
  });
}

function cambiarCancion() {
  cancion.duracion = duracionCancion(cancion.audio.duration);

  reproductor.duracion.innerText = `00:00/${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  reproductor.deslizador['progresoCancion'].max = cancion.audio.duration;

  document.querySelector('.cancion__titulo').innerText = listadoCanciones[reproduciendo].titulo;

  if (reproductor.boton['reproducirPausa'].firstChild.classList.contains(icono['pausa'])) {
    cancion.audio.play();
    actualizarReproductor();
  }
}
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: listadoCanciones[reproduciendo].titulo,
    artist: 'ForYou❤️', // Nombre personalizado de tu app
    album: 'Colección Especial',
    artwork: [
      { src: listadoCanciones[reproduciendo].caratulaUrl, sizes: '96x96', type: 'image/png' },
      { src: listadoCanciones[reproduciendo].caratulaUrl, sizes: '128x128', type: 'image/png' },
      { src: listadoCanciones[reproduciendo].caratulaUrl, sizes: '192x192', type: 'image/png' },
      { src: listadoCanciones[reproduciendo].caratulaUrl, sizes: '256x256', type: 'image/png' },
      { src: listadoCanciones[reproduciendo].caratulaUrl, sizes: '384x384', type: 'image/png' },
      { src: listadoCanciones[reproduciendo].caratulaUrl, sizes: '512x512', type: 'image/png' }
    ]
  });

  // Añadir controles de acción
  navigator.mediaSession.setActionHandler('play', () => cancion.audio.play());
  navigator.mediaSession.setActionHandler('pause', () => cancion.audio.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => cargarCancion(-1));
  navigator.mediaSession.setActionHandler('nexttrack', () => cargarCancion(1));
}

function duracionCancion(duracionS) {
  let minutos = Math.floor(duracionS / 60).toString().padStart(2, '0');
  let segundos = Math.floor(duracionS - minutos * 60).toString().padStart(2, '0');
  return { minutos, segundos };
}

function actualizarReproductor() {
  let momentoActual = duracionCancion(cancion.audio.currentTime);
  reproductor.duracion.innerText = `${momentoActual.minutos}:${momentoActual.segundos}/${cancion.duracion.minutos}:${cancion.duracion.segundos}`;
  reproductor.deslizador['progresoCancion'].value = cancion.audio.currentTime;

  if (cancion.audio.currentTime >= cancion.audio.duration - 0.5) {
    cargarCancion(1);
  }
}

function alternarReproduccion() {
  let pausar = reproductor.boton['reproducirPausa'].firstChild.classList.toggle(icono['reproducir']);
  reproductor.boton['reproducirPausa'].firstChild.classList.toggle(icono['pausa']);

  if (!pausar) {
    idFrame = setInterval(actualizarReproductor, 1000); // Actualizar cada segundo
    cancion.audio.play();
    reproductor['caratula'].style.animationPlayState = 'running';
    reproductor.nodo.classList.add('reproduciendo');
  } else {
    clearInterval(idFrame);
    cancion.audio.pause();
    reproductor['caratula'].style.animationPlayState = 'paused';
    reproductor.nodo.classList.remove('reproduciendo');
  }
}

function alternarDeslizadorVolumen(e) {
  e.stopPropagation();
  if (e.target == reproductor.boton['volumen'] || e.target == reproductor.boton['volumen'].firstChild) {
    reproductor.deslizador['volumen'].classList.toggle('oculto');
  } else {
    reproductor.deslizador['volumen'].classList.add('oculto');
  }
}

function moverVolumen(e) {
  let volumen = e.target.value;
  cancion.audio.volume = volumen / 100;
  let iconoVolumen = reproductor.boton['volumen'].querySelector('i');

  if (volumen == 0) {
    iconoVolumen.className = icono['volumenSilenciado'];
  } else if (volumen <= 50) {
    iconoVolumen.className = icono['volumenBajo'];
  } else {
    iconoVolumen.className = icono['volumenAlto'];
  }
}
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && !cancion.audio.paused) {
    idFrame = setInterval(actualizarReproductor, 1000);
  } else {
    clearInterval(idFrame);
  }
});