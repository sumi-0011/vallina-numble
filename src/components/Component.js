import { routeChange } from '../router';

class Component {
  state;
  props;
  $target;
  $component;

  constructor(elementType, $target, props) {
    this.$target = $target;
    this.props = props;
    this.$component = document.createElement(elementType);
    this.render();
  }

  // setAttribute(name, value) {
  //   this.$component.setAttribute(name, value);
  // }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  view() {
    return ``;
  }

  mount() {}

  render() {
    this.$component.insertAdjacentHTML('beforeend', this.view());
    this.$target.appendChild(this.$component);
    this.mount();
  }

  navigate(url, params) {
    routeChange(url, params);
  }

  onClick(selector, callback) {
    $currentTarget = this.$component.querySelector(selector);

    $currentTarget.addEventListener('click', (e) => {
      callback(e);
    });
  }

  onChange(selector, callback) {
    $currentTarget = this.$component.querySelector(selector);

    $currentTarget.addEventListener('change', (e) => {
      callback(e);
    });
  }

  onSubmit(selector, callback) {
    $currentTarget = this.$component.querySelector(selector);

    $currentTarget.addEventListener('submit', (e) => {
      callback(e);
    });
  }
}

export default Component;
