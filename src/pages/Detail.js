function Detail({ $target, postId }) {
  this.state = {};

  const $page = document.createElement('div');
  $page.className = 'Detail';
  $page.innerHTML = `<h1>Detail ${postId}</h1>`;

  this.render = () => {
    $target.appendChild($page);
  };
}

export default Detail;
