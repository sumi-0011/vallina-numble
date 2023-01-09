function Comment({ $target, initialState }) {
  this.state = initialState;

  const $comment = document.createElement('div');
  $comment.className = 'comment';
  $comment.innerHTML = `
    <div class="comment__content">comment</div>
    <button class="comment__delete-btn">x</button>
  `;

  this.render = () => {
    $target.appendChild($comment);
  };

  this.render();
}

export default Comment;
