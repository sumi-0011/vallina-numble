import Component from '@core/Component';
import EditIcon from '@components/icons/EditIcon';
import RemoveIcon from '@components/icons/RemoveIcon';

class IconButton extends Component {
  view() {
    return `<button class='icon-button'></button>`;
  }

  mount() {
    const { icon, onClick } = this.props;

    switch (icon) {
      case 'edit':
        new EditIcon(this.$target);
        break;
      case 'remove':
        new RemoveIcon(this.$target);
        break;
      default:
        break;
    }

    this.$target.addEventListener('click', onClick);
  }
}

export default IconButton;
