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
    this.$component = createElementFromHTML(this.view());
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
