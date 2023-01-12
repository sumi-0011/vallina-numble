import '../../css/post.scss';
import Component from '../../components/common/Component';

class Post extends Component {
  view() {
    const { postId, image, title, content } = this.props.post;

    return `
      <div class="post" data-id="${postId}">
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
    this.$component.addEventListener('click', () => {
      const { postId } = this.props.post;

      this.navigate(`/post/${postId}`);
    });
  }
}

export default Post;
