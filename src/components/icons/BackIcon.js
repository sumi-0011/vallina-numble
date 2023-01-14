import Component from '../common/Component';

const color = '#525252';

class BackIcon extends Component {
  view() {
    return `
      <svg width="16" height="25" viewBox="0 0 16 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1566 32.5416C12.82 32.5428 12.4875 32.4672 12.1834 32.3205C11.8793 32.1738 11.6114 31.9596 11.3994 31.6937L0.518213 17.9437C0.186863 17.5336 0.00572205 17.0193 0.00572205 16.4885C0.00572205 15.9577 0.186863 15.4433 0.518213 15.0333L11.7823 1.28328C12.1647 0.815287 12.7142 0.520981 13.3099 0.465111C13.9056 0.409241 14.4988 0.596383 14.9588 0.985367C15.4189 1.37435 15.7082 1.93331 15.7631 2.53929C15.818 3.14527 15.6341 3.74862 15.2517 4.21662L5.18156 16.4999L14.9138 28.7833C15.1892 29.1197 15.3642 29.5293 15.418 29.9637C15.4718 30.398 15.4022 30.839 15.2173 31.2344C15.0325 31.6298 14.7401 31.963 14.3749 32.1947C14.0097 32.4263 13.5869 32.5467 13.1566 32.5416V32.5416Z" fill="${color}"/>
      </svg>
    
    `;
  }
  mount() {
    this.$target.classList.add('icon');
  }
}

export default BackIcon;
