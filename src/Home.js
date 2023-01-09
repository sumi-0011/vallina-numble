function Home({ $target }) {
  this.state = {};

  const $page = document.createElement('div');
  $page.className = 'Home';
  $page.innerHTML = '<h1>home</h1>';

  this.render = () => {
    $target.appendChild($page);
  };
}

export default Home;
