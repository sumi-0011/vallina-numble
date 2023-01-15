import Component from '@core/Component';
import XIcon from '@components/icons/XIcon';
import { deleteComment } from '@api/comment';

class Comment extends Component {
  view() {
    const { content } = this.props.comment;
    return `
      <div class="comment__content">${content}</div>
      <button class="comment__delete-btn"></button>
    `;
  }

  mount() {
    new XIcon(this.querySelectorChild(`.comment__delete-btn`));

    this.querySelectorChild(`.comment__delete-btn`).addEventListener(
      'click',
      this.handleCommentDelete.bind(this),
    );
  }

  async handleCommentDelete() {
    if (!this.props.comment.commentId) return;

    const { comment, refetch } = this.props;

    try {
      await deleteComment(comment.commentId);
      await refetch();

      alert('삭제되었습니다.');
    } catch (error) {
      alert(error);
    }
  }
}

export default Comment;
