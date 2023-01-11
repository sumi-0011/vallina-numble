import { deleteComment } from '../../api/comment';
import styled from '../../css/comment.module.scss';
import XIcon from '../../components/icons/XIcon';

function Comment({ $target, initialState, refetch }) {
  const $comment = document.createElement('div');
  $target.appendChild($comment);
  $comment.className = styled['comment'];

  const $content = document.createElement('div');
  $comment.appendChild($content);
  $content.className = styled.content;

  const $deleteBtn = document.createElement('button');
  $comment.appendChild($deleteBtn);
  $deleteBtn.className = styled['delete-btn'];

  new XIcon({ $target: $deleteBtn });

  this.state = initialState;

  $comment.dataset.id = this.state.comment.commentId;
  $comment.dataset.postId = this.state.comment.postId;

  const handleDeleteComment = async () => {
    if (!this.state.comment.commentId) return;

    try {
      await deleteComment(this.state.comment.commentId);
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

    $content.innerText = content;
  };

  $deleteBtn.addEventListener('click', () => {
    handleDeleteComment();
  });

  this.render();
}

export default Comment;
