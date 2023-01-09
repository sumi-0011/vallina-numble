import '../css/home.scss';

function Post({ $target, post }) {
  const { postId, image, title, content } = post;

  const $post = document.createElement('div');

  $post.className = 'post';
  $post.dataset.id = postId;
  $post.innerHTML = `
    <div class="post__img">
      <img src="${image}" />
    </div>
    <div>
      <div class="post__title">${title}</div>
      <div class="post__content">${content}</div>
    </div>
  `;

  this.render = () => {
    $target.appendChild($post);
  };

  return $post;
}

export default Post;
