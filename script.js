const versiculos = [
  '"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso." - 1 Corintios 13:4 💚',
  '"Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones." - Salmos 46:1 💚',
  '"Ama al Señor tu Dios con todo tu corazón, con toda tu alma y con todas tus fuerzas." - Deuteronomio 6:5 💚',
  '"Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia." - Proverbios 3:5 💚',
  '"Pero los que confían en el Señor renovarán sus fuerzas." - Isaías 40:31 💚',
  '"El Señor es mi pastor, nada me faltará." - Salmos 23:1 💚',
  '"En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia." - Proverbios 17:17 💚',
  '"El que anda con sabios será sabio, pero el compañero de los necios sufrirá daño." - Proverbios 13:20 💚',
  '"Guarda tu corazón, porque de él mana la vida." - Proverbios 4:23 💚',
  '"Yo soy el camino, la verdad y la vida. Nadie viene al Padre sino por mí." - Juan 14:6 💚',
  '"Y sabemos que en todas las cosas Dios trabaja para el bien de los que lo aman." - Romanos 8:28 💚',
  '"El corazón alegre es buena medicina, pero el espíritu quebrantado seca los huesos." - Proverbios 17:22 💚'
];

const frases = [
  '"Eres mi razón de ser, mi mayor alegría y el amor de mi vida." 💚',
  '"Cada día contigo es un regalo que agradezco con todo mi corazón." 💚',
  '"No importa dónde estemos, mientras estemos juntos, estoy en casa." 💚',
  '"Tu sonrisa ilumina hasta mis días más oscuros." 💚',
  '"Amo cada momento que paso contigo; eres mi lugar favorito." 💚',
  '"Desde que te conocí, mi mundo es mucho más bonito." 💚',
  '"En tus ojos veo mi hogar y en tu corazón, mi refugio." 💚',
  '"Eres mi fuerza en los días débiles y mi paz en las tormentas." 💚',
  '"No hay palabras suficientes para expresar cuánto te amo." 💚',
  '"Eres el sueño que nunca supe que tenía, pero del que nunca quiero despertar." 💚',
  '"Con cada latido de mi corazón, te amo más y más." 💚',
  '"Eres la melodía que le da sentido a mi canción." 💚',
  '"En tus abrazos, encuentro mi hogar y mi felicidad." 💚'
];

document.getElementById("versiculo").innerText =
  versiculos[Math.floor(Math.random() * versiculos.length)];
document.getElementById("frase").innerText =
  frases[Math.floor(Math.random() * frases.length)];

// Mostrar emojis al hacer clic
function mostrarEmojis(emoji, sectionId) {
  const section = document.querySelector(`.${sectionId}`);
  const emojiElement = document.createElement("span");
  emojiElement.className = "emoji";
  emojiElement.innerText = emoji;
  section.appendChild(emojiElement);
  setTimeout(() => emojiElement.remove(), 1000);
}

// Subir foto y persistir
function activarSubidaFoto() {
  document.querySelector(".subir-foto").style.display = "block";
}

function subirFoto() {
  const fileInput = document.getElementById("foto-upload");
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("fotoJueves", reader.result);
      mostrarFoto();
    };
    reader.readAsDataURL(file);
  }
}

function mostrarFoto() {
  const fotoJueves = localStorage.getItem("fotoJueves");
  if (fotoJueves) {
    const imgElement = document.getElementById("foto-jueves");
    imgElement.src = fotoJueves;
  }
}

// Cargar foto al iniciar
document.addEventListener("DOMContentLoaded", mostrarFoto);
