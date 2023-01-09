import Home from './pages/Home';
import Detail from './pages/Detail';
import Writing from './pages/Writing';
import { init } from './router';

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = '';
    if (pathname === '/') {
      new Home({ $target }).render();
    } else if (pathname.indexOf('post') === 1) {
      const [, , postId] = pathname.split('/');

      new Detail({ $target, postId }).render();
    } else if (pathname === '/write') {
      new Writing({ $target }).render();
    }
  };
  init(this.route);
  this.route();
}

export default App;
