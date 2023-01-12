import { routeChange } from '../router';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

class Page {
  state;
  props;
  $target;
  $component;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.init();
    this.render();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }
  init() {}

  view() {
    return `<div></div>`;
  }

  mount() {}

  render() {
    this.$component = createElementFromHTML(this.view());
    this.mount();
    this.$target.innerHTML = '';
    this.$target.appendChild(this.$component);
  }

  navigate(url, params) {
    routeChange(url, params);
  }

  querySelectorChild(selector) {
    return this.$component.querySelector(selector);
  }
}

export default Page;
