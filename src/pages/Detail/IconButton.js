import EditIcon from '../../components/icons/EditIcon';
import RemoveIcon from '../../components/icons/RemoveIcon';
import styled from '../../css/button.module.scss';
import Component from '../../components/common/Component';

class IconButton extends Component {
  view() {
    return `<button class='${styled['icon-button']}'></button>`;
  }

  mount() {
    const { icon, onClick } = this.props;

    switch (icon) {
      case 'edit':
        new EditIcon(this.$component);
        break;
      case 'remove':
        new RemoveIcon(this.$component);
        break;
      default:
        break;
    }

    this.$component.addEventListener('click', onClick);
  }
}

export default IconButton;
