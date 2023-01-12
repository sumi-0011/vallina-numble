import '../css/button.scss';
import Component from './Component';
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
