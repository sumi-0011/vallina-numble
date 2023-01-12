import { routeChange } from '../../router';

class Page {
  state;
  props;
  $target;

  constructor($target, { title, ...props }) {
    this.$target = $target;
    this.props = props;

    document.title = title ?? '';

    this.init();
    this.render();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  init() {}

  setClassName(className) {
    this.$target.className = className;
  }

  view() {
    return `<div></div>`;
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

export default Page;
