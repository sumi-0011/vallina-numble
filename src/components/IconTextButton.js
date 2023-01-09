import Button from './Button';

function IconTextButton({ initialState, $target }) {
  const $wrapper = document.createElement('div');
  $target.appendChild($wrapper);

  this.state = initialState;

  $wrapper.className = 'icon-text-button';

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

export default IconTextButton;
