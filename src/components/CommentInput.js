import SendIcon from './icons/SendIcon';

function CommentInput({ $target, initialState }) {
  this.state = initialState;

  const $input = document.createElement('input');
  $input.className = 'comment-input';

  const $button = document.createElement('button');
  $button.className = 'comment-submit';

  this.render = () => {
    $target.appendChild($input);
    $target.appendChild($button);

    new SendIcon({ $target: $button });
  };

  this.render();
}

export default CommentInput;
