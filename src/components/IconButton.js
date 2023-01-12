import EditIcon from './icons/EditIcon';
import RemoveIcon from './icons/RemoveIcon';
import styled from '../css/button.module.scss';
import Component from './Component';

class IconButton extends Component {
  view() {
    return `<button class='${styled['icon-button']}'></button>`;
  }

  mount() {
    const { icon, onClick } = this.props;

    switch (icon) {
      case 'edit':
        new EditIcon({ $target: this.$component });
        break;
      case 'remove':
        new RemoveIcon({ $target: this.$component });
        break;
      default:
        break;
    }

    this.$component.addEventListener('click', onClick);
  }
}

export default IconButton;
