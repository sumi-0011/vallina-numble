function Detail({ $target }) {
  this.state = {};

  const $page = document.createElement('div');
  $page.className = 'Detail';
  $page.innerHTML = '';

  this.render = () => {
    $target.appendChild($page);
  };
}

export default Detail;
