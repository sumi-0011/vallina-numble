import Home from './pages/Home';
import Detail from './pages/Detail';
import Writing from './pages/Writing';
import { init } from './router';

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = ` 
      <div>
        <header></header>
        <div class='content'></div>
      </div>`;

    const $content = $target.querySelector('.content');

    if (pathname === '/') {
      new Home({ $target: $content }).render();
    } else if (pathname.indexOf('post') === 1) {
      const [, , postId] = pathname.split('/');
      new Detail({ $target: $content, postId }).render();
    } else if (pathname === '/write') {
      new Writing({ $target: $content }).render();
    }
  };

  init(this.route);

  this.route();
}

export default App;
