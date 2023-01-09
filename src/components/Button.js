import '../css/button.scss';

function Button({ $target, initialState }) {
  const $button = document.createElement('button');
  $target.appendChild($button);
  this.state = initialState;

  this.render = () => {
    if (!this.state.name) {
      return;
    }

    const { name } = this.state;
    $button.className = 'button';
    $button.textContent = name;
  };

  $button.addEventListener('click', this.state.onClick);
  this.render();
}

export default Button;
