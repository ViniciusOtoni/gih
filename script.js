// Música
const music = document.getElementById('music');
const btnMusic = document.getElementById('music-btn');
let playing = false;

btnMusic.onclick = () => {
  playing ? music.pause() : music.play();
  playing = !playing;
};

// Fade + typewriter
const sections = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      const text = entry.target.querySelector('.type');
      if (text) typeWriter(text);
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => observer.observe(sec));

function typeWriter(el) {
  if (el.dataset.done) return;
  el.dataset.done = true;

  const text = el.textContent;
  el.textContent = '';

  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 35);
}

// BOTÃO NÃO — FUGA SEM SOBREPOR
const nao = document.getElementById('nao');
const area = document.querySelector('.botoes');
const sim = document.getElementById('sim');

function fugir() {
  const padding = 20;

  let x, y;
  do {
    x = Math.random() * (area.clientWidth - nao.offsetWidth - padding);
    y = Math.random() * (area.clientHeight - nao.offsetHeight - padding);
  } while (
    Math.abs(x - sim.offsetLeft) < 120 &&
    Math.abs(y - sim.offsetTop) < 80
  );

  nao.style.left = `${x}px`;
  nao.style.top = `${y}px`;

  navigator.vibrate?.(60);
}

nao.addEventListener('mouseover', fugir);
nao.addEventListener('touchstart', fugir);

// SIM
// SIM
document.getElementById('sim').onclick = () => {
  navigator.vibrate?.([100, 50, 100]);
  window.location.href = 'sim.html';
};

