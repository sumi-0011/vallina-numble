import Component from '@core/Component';
import EditIcon from '@components/icons/EditIcon';
import RemoveIcon from '@components/icons/RemoveIcon';
import { deletePost } from '@api/post';

class Detail extends Component {
  view() {
    const { title, content, createdAt, image } = this.props.post;
    const date = new Date(createdAt);

    return `
      <div class="img">
        <img src="${image}" />
      </div>
      <div class="detail__wrapper">
        <div class="top">
          <h2 class="title">${title}</h2>
          <span class="date">${date.toLocaleString()}</span>
        </div>
        <div class="content">${content}</div>
        <div class="bottom">
          <div class='edit-btn-wrapper'></div>
          <div class='remove-btn-wrapper'></div>
        </div>
      </div>
    `;
  }

  mount() {
    const $iconWrapper2 = this.querySelectorChild('.edit-btn-wrapper');
    const $iconWrapper1 = this.querySelectorChild('.remove-btn-wrapper');

    new EditIcon($iconWrapper2);
    $iconWrapper2.addEventListener('click', () => {
      this.handleEditPost();
    });

    new RemoveIcon($iconWrapper1);
    $iconWrapper1.addEventListener('click', () => {
      this.handleRemovePost();
    });
  }

  handleEditPost() {
    const { postId } = this.props.post;
    if (!postId) return;

    this.navigate(`/edit/${postId}`);
  }

  async handleRemovePost() {
    const { postId } = this.props.post;
    if (!postId) return;

    try {
      await deletePost(postId);

      alert('삭제되었습니다.');
      this.navigate('/');
    } catch (error) {
      alert(error);
    }
  }
}

export default Detail;
