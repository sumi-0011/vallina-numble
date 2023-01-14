import IconButton from './IconButton';
import Component from '../../components/common/Component';
import { deletePost } from '../../api/post';

class Detail extends Component {
  view() {
    const { title, postId, content, createdAt, image } = this.props.post;
    console.log('createdAt: ', createdAt);
    const date = new Date(createdAt);
    return `
      <div class="detail">
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
      </div>
    `;
  }

  mount() {
    const { postId } = this.props.post;

    const $iconWrapper2 = this.$target.querySelector(
      '.bottom .edit-btn-wrapper',
    );
    const $iconWrapper1 = this.$target.querySelector(
      '.bottom .remove-btn-wrapper',
    );

    new IconButton($iconWrapper2, {
      icon: 'edit',
      onClick: () => {
        this.navigate(`/edit/${postId}`);
      },
    });

    new IconButton($iconWrapper1, {
      icon: 'remove',
      onClick: () => {
        this.handleRemovePost();
      },
    });
  }

  async handleRemovePost() {
    const { postId } = this.props.post;
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
