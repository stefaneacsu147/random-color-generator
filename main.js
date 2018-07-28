const colorCSS = document.querySelector("h3");
const gradient1 = document.querySelector(".gradient1");
const body = document.getElementById("gradient");
const randomGradient = document.getElementById("rand");

const setGradient = () => {
  gradient1.style.background = `linear-gradient(90deg, ${gradient1.value}, ${gradient1.value})`;
  colorCSS.textContent = `${gradient1.style.background}`;
};

const generateGradient = () => {
  const g1 = Math.floor((Math.random() * 256));
  const g2 = Math.floor((Math.random() * 256));
  const g3 = Math.floor((Math.random() * 256));
  const randomRGB = `${g1, g2, g3}`;

  hexColor = "#" + ((1 << 24) + (g1 << 16) + (g2 << 8) + g3).toString(16).slice(1);
};

const pickGradientOne = () => {
  generateGradient();
  gradient1.value = hexColor;
};



randomGradient.addEventListener("click", function () {
  pickGradientOne();
  setGradient();
});

window.onload = function () {
  Particles.init({
    selector: '.background',
    color: '#DA0463',
    connectParticles: true
  });
};