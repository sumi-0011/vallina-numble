import Home from '@pages/home';
import DetailPage from '@pages/detail';
import WritingPage from '@pages/writing';
import { init } from '@/router';
import Edit from '@pages/edit';
import Header from '@components/Header';

class App {
  $target;
  constructor({ $target }) {
    this.$target = $target;
    init(this.route.bind(this));
    window.addEventListener('popstate', this.route.bind(this));
    this.route();
  }

  route() {
    const { pathname } = location;

    this.$target.innerHTML = ` 
        <header class='header'></header>
        <div class='content'></div>
   `;

    const $content = this.$target.querySelector('.content');
    const $header = this.$target.querySelector('.header');
    new Header($header);

    if (pathname === '/') {
      new Home($content, { title: 'Home' });
    } else if (pathname.indexOf('post') === 1) {
      const [, , postId] = pathname.split('/');
      new DetailPage($content, { postId, title: 'Detail' });
    } else if (pathname.indexOf('edit') === 1) {
      const [, , postId] = pathname.split('/');
      new Edit($content, { postId, title: 'Edit' });
    } else if (pathname === '/write') {
      new WritingPage($content, { title: 'Write' });
    }
  }
}

export default App;
