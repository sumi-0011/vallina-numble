import Component from './common/Component';
import '../css/button.scss';

class Button extends Component {
  view() {
    const { name, className } = this.props;
    return `<button class="button ${className}">${name}</button>`;
  }

  mount() {
    this.$component.addEventListener('click', this.props.onClick);
  }
}

export default Button;
