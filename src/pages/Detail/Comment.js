import { deleteComment } from '../../api/comment';
import styled from '../../css/comment.module.scss';
import XIcon from '../../components/icons/XIcon';
import Component from '../../components/common/Component';

class Comment extends Component {
  view() {
    const { commentId, postId } = this.props.comment;
    return `
      <div class="${styled['comment']}" data-id="${commentId}" data-post-id="${postId}">
        <div class="${styled.content}"></div>
        <button class="${styled['delete-btn']}"></button>
      </div>
    `;
  }

  mount() {
    const { content } = this.props.comment;

    this.querySelectorChild(`.${styled.content}`).innerText = content;

    new XIcon(this.querySelectorChild(`.${styled['delete-btn']}`));

    this.querySelectorChild(`.${styled['delete-btn']}`).addEventListener(
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
