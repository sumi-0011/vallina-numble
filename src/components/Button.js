import Component from './common/Component';
import '../css/button.scss';

class Button extends Component {
  view() {
    const { name, className } = this.props;
    return `<button class="button ${className}">${name}</button>`;
  }

  mount() {
    const { onClick } = this.props;
    this.$target.addEventListener('click', onClick);
  }
}

export default Button;
