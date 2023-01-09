import '../css/post.scss';
import { routeChange } from '../router';

function Post({ $target, initialState }) {
  const $post = document.createElement('div');
  $post.className = 'post';

  $target.appendChild($post);

  this.state = initialState;

  this.render = () => {
    if (!this.state.post) return;

    const { postId, image, title, content } = this.state.post;
    $post.dataset.id = postId;
    $post.innerHTML = `
      <div class="post__img">
        <img src="${image}" />
      </div>
      <div class="post__inner">
        <div class="post__title">${title}</div>
        <div class="post__content">${content}</div>
      </div>
    `;
  };

  this.render();

  $post.addEventListener('click', () => {
    const { postId } = this.state.post;
    console.log('post click', postId);

    routeChange(`/post/${postId}`);
  });
}

export default Post;
