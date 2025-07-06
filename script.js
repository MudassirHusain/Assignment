/* script.js */
const options = document.querySelectorAll('.option');
let selectedOption = options[1];

function selectOption(el, price) {
  options.forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  selectedOption = el;
  document.getElementById('total-price').textContent = `$${price.toFixed(2)} USD`;
}

window.onload = () => {
  selectedOption.classList.add('selected');
};