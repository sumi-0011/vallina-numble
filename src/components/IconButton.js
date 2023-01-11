import ModifyIcon from './icons/ModifyIcon';
import RemoveIcon from './icons/RemoveIcon';

import styled from '../css/button.module.scss';
import Component from './Component';

class IconButton extends Component {
  view() {
    this.$component.className = styled['icon-button'];

    return ``;
  }

  mount() {
    const { icon, onClick } = this.props;
    switch (icon) {
      case 'modify':
        new ModifyIcon({ $target: this.$component });
        break;
      case 'delete':
        new RemoveIcon({ $target: this.$component });
        break;
      default:
        break;
    }

    this.$component.addEventListener('click', onClick);
  }
}

export default IconButton;
