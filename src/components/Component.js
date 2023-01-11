import { routeChange } from '../router';

class Component {
  state;
  props;
  $target;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;

    this.render();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  view() {
    return ``;
  }

  mount() {}

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.view());
    this.mount();
  }

  navigate(url, params) {
    routeChange(url, params);
  }

  onClick(selector, callback) {
    $currentTarget = this.$target.querySelector(selector);

    $currentTarget.addEventListener('click', (e) => {
      callback(e);
    });
  }

  onChange(selector, callback) {
    $currentTarget = this.$target.querySelector(selector);

    $currentTarget.addEventListener('change', (e) => {
      callback(e);
    });
  }

  onSubmit(selector, callback) {
    $currentTarget = this.$target.querySelector(selector);

    $currentTarget.addEventListener('submit', (e) => {
      callback(e);
    });
  }
}

export default Component;
