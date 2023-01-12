import { routeChange } from '../router';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

class Component {
  state;
  props;
  $target;
  $component;

  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.init();
    this.render();
    this.$target.appendChild(this.$component);
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
    this.$component = createElementFromHTML(this.view());
    this.mount();
  }

  navigate(url, params) {
    routeChange(url, params);
  }

  querySelectorChild(selector) {
    return this.$component.querySelector(selector);
  }

  onClick(selector, callback) {
    this.querySelectorChild(selector).addEventListener('click', (e) => {
      callback(e);
    });
  }

  onChange(selector, callback) {
    this.querySelectorChild(selector).addEventListener('change', (e) => {
      callback(e);
    });
  }

  onSubmit(selector, callback) {
    this.querySelectorChild(selector).addEventListener('submit', (e) => {
      callback(e);
    });
  }
}

export default Component;
