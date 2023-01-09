import ModifyIcon from './icons/ModifyIcon';
import RemoveIcon from './icons/RemoveIcon';

function IconButton({ $target, initialState }) {
  const $button = document.createElement('button');
  $button.className = 'icon-button';

  $target.appendChild($button);

  this.state = initialState;
  //iconName

  this.render = () => {
    if (!this.state.iconName) {
      return;
    }
    const { iconName } = this.state;

    switch (iconName) {
      case 'modify':
        new ModifyIcon({ $target: $button });
        break;
      case 'delete':
        new RemoveIcon({ $target: $button });
        break;

      default:
        break;
    }
  };

  this.render();
}

export default IconButton;
