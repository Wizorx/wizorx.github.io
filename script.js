const wiz = window.document.getElementById('wiz')
const ward = window.document.getElementById('ward')
const eigenspace = window.document.getElementById('eigenspace')
const calculus = window.document.getElementById('calculus')
const ovo = window.document.getElementById('ovo')

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(wiz);
neonGlory(ward);
neonGlory(eigenspace);
neonGlory(calculus);
neonGlory(ovo);
eigenspace.onmouseenter = ({ target }) =>  neonGlory(target);
ovo.onmouseenter = ({ target }) =>  neonGlory(target);
calculus.onmouseenter = ({ target }) =>  neonGlory(target);