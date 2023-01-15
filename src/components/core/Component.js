import { routeChange } from '@/router';

class Component {
  state;
  props;
  $target;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.init();
    this.render();
  }

  init() {}

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  view() {
    return ``;
  }

  mount() {}

  render() {
    this.$target.innerHTML = this.view();
    this.mount();
  }

  navigate(url, params) {
    routeChange(url, params);
  }

  querySelectorChild(selector) {
    return this.$target.querySelector(selector);
  }
}

export default Component;
