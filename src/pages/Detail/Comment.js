import { deleteComment } from '../../api/comment';
import XIcon from '../../components/icons/XIcon';
import Component from '../../components/common/Component';
import '../../css/comment.scss';

class Comment extends Component {
  view() {
    const { commentId, postId, content } = this.props.comment;
    return `
      <div class="comment" data-id="${commentId}" data-post-id="${postId}">
        <div class="content">${content}</div>
        <button class="delete-btn"></button>
      </div>
    `;
  }

  mount() {
    new XIcon(this.querySelectorChild(`.delete-btn`));

    this.querySelectorChild(`.delete-btn`).addEventListener(
      'click',
      this.handleDeleteComment.bind(this),
    );
  }

  async handleDeleteComment() {
    if (!this.props.comment.commentId) return;

    const { comment, refetch } = this.props;

    try {
      await deleteComment(comment.commentId);
      await refetch();
    } catch (error) {
      alert(error);
    }
  }
}

export default Comment;
