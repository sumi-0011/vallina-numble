import Home from './pages/Home';

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = '';

    if (pathname === '/') {
      new Home({ $target }).render();
    }
  };

  this.route();
}

export default App;
