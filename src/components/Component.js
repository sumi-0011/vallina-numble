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
    this.$target.appendChild(this.$component);
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
    this.mount();
  }

  navigate(url, params) {
    routeChange(url, params);
  }
}

export default Component;
