import '../css/button.scss';

function Button({ name, onClick }) {
  this.state = {};

  const $button = document.createElement('button');
  $button.className = 'button';
  $button.textContent = name;
  $button.addEventListener('click', onClick);

  return $button;
}

export default Button;
