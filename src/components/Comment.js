import { deleteComment } from '../api/comment';
import XIcon from './icons/XIcon';

function Comment({ $target, initialState, refetch }) {
  const $comment = document.createElement('div');
  $comment.className = 'comment';
  $target.appendChild($comment);

  const $deleteBtn = document.createElement('button');
  $deleteBtn.className = 'comment__delete-btn';

  this.state = initialState;

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
      await refetch();
    } catch (error) {
      alert(error);
    }
  };

  this.render = () => {
    if (!this.state.comment) {
      return;
    }

    const { commentId, content, createdAt, postId, updatedAt } =
      this.state.comment;
    $comment.dataset.id = commentId;
    $comment.dataset.postId = postId;

    $comment.innerHTML = `
      <div class="comment__content">${content}</div>
    `;
    $comment.appendChild($deleteBtn);
    $deleteBtn.addEventListener('click', () => {
      handleDeleteComment(commentId);
    });

    new XIcon({ $target: $deleteBtn });
  };

  this.render();
}

export default Comment;
