import 'typeface-press-start-2p';
import './styles.scss';

const display = document.getElementById('display');
const choices = document.getElementById('choices');
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad saepe aut rerum maiores ex neque laboriosam quidem molestiae omnis necessitatibus eos sed possimus iste animi, qui nemo eligendi quae?`;

let charsWritten = 0;
let html = '';
let done = text.length === charsWritten;

function write(text) {
  const interval = setInterval(() => {
    if (charsWritten >= text.length) {
      done = true;
      clearInterval(interval);
    }
    html = `<p>${text.slice(0, charsWritten)}</p>`
    charsWritten++;
  }, 50)
}

function render() {
  display.innerHTML = html;
  if (done) {
    choices.classList.remove('hidden');
    return;
  }
  requestAnimationFrame(render);
}

display.addEventListener('click', () => charsWritten = text.length)

write(text);
render();
