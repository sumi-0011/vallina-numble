function Writing({ $target }) {
  this.state = {};

  const $page = document.createElement('div');
  $page.className = 'Writing';
  $page.innerHTML = '<h1>Writing</h1>';

  this.render = () => {
    $target.appendChild($page);
  };
}

export default Writing;
