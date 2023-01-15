import Component from '@core/Component';
import BackIcon from '@components/icons/BackIcon';

class Header extends Component {
  view() {
    return `<button class='back-icon'><</button><span>HPNY 2023</span>`;
  }

  mount() {
    const $back = this.querySelectorChild('.back-icon');
    new BackIcon($back);
    const { pathname } = location;

    if (pathname === '/') {
      $back.style.visibility = 'hidden';
    }

    $back.addEventListener('click', () => {
      this.moveBack();
    });
  }
  moveBack() {
    // const referrer = document.referrer;
    // TODO : BackButton 구현
    this.navigate('/');
  }
}

export default Header;
