import XIcon from './icons/XIcon';

function Comment({ $target, initialState }) {
  const $comment = document.createElement('div');
  $comment.className = 'comment';
  $target.appendChild($comment);

  this.state = initialState;

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
      <button class="comment__delete-btn"></button>
    `;

    new XIcon({ $target: $comment.querySelector('.comment__delete-btn') });
  };

  this.render();
}

export default Comment;
