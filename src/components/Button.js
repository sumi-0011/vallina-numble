import '../css/button.scss';

function Button({ $target, initialState }) {
  const $button = document.createElement('button');
  $target.appendChild($button);
  this.state = initialState;
  $button.className = 'button';

  this.render = () => {
    const { name, className, onClick } = this.state;

    if (!name) {
      return;
    }

    $button.textContent = name;

    if (className) {
      $button.classList.add(className);
    }

    $button.addEventListener('click', onClick);
  };

  this.render();
}

export default Button;
