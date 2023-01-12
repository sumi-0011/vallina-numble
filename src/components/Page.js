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
  // $component;

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

  setTitle(title) {
    document.title = title;
  }

  setClassName(className) {
    this.$target.className = className;
  }

  view() {
    return `<div></div>`;
  }

  mount() {}

  render() {
    console.log('render: ');
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
