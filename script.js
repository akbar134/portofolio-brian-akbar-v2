const intro = document.getElementById('intro');
const typing = document.getElementById('typing');
const words = ['XII RPL 1 Student', 'Web Developer', 'Software Engineering Student'];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const word = words[wordIndex];
  typing.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);
  let speed = deleting ? 45 : 75;
  if(!deleting && charIndex === word.length){ speed = 1300; deleting = true; }
  else if(deleting && charIndex === 0){ deleting = false; wordIndex = (wordIndex + 1) % words.length; speed = 350; }
  setTimeout(typeLoop, speed);
}

window.addEventListener('load', () => {
  setTimeout(() => intro.classList.add('hide'), 1900);
  typeLoop();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show'); });
}, {threshold:.14});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav nav a');
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if(window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
});
