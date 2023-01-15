import Component from '@core/Component';
import '@css/post.scss';

class Post extends Component {
  view() {
    const { image, title, content } = this.props.post;

    return `
      <div class="post">
        <div class="post__img">
          <img src="${image}" />
        </div>
        <div class="post__inner">
          <div class="post__title">${title}</div>
          <div class="post__content">${content}</div>
        </div>
      </div>`;
  }

  mount() {
    const { postId } = this.props.post;

    this.$target.addEventListener('click', () => {
      this.navigate(`/post/${postId}`);
    });
  }
}

export default Post;
