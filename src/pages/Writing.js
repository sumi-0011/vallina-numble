function Writing({ $target }) {
  this.state = {};

  const $page = document.createElement('div');
  $page.className = 'Writing';
  $page.innerHTML = '';

  this.render = () => {
    $target.appendChild($page);
  };
}

export default Writing;
