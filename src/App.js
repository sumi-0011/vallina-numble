import Home from './pages/Home';
import Detail from './pages/Detail';
import { init } from './router';

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = '';

    if (pathname === '/') {
      new Home({ $target }).render();
    } else if (pathname.indexOf('post')) {
      const [, , postId] = pathname.split('/');
      console.log(postId);

      new Detail({ $target, postId }).render();
    }
  };
  init(this.route);
  this.route();
}

export default App;
