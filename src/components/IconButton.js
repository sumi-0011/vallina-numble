import Button from './Button';

function IconButton({ initialState, $target }) {
  const $wrapper = document.createElement('div');
  $target.appendChild($wrapper);

  this.state = initialState;

  $wrapper.className = 'icon-button';

  this.render = () => {
    if (!this.state) {
      return;
    }

    const { icon, name, onClick } = this.state;
    new Button({
      $target: $wrapper,
      initialState: {
        name,
        onClick,
      },
    });
  };

  this.render();
}

export default IconButton;
