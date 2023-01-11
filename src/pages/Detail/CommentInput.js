import SendIcon from '../../components/icons/SendIcon';
import { addComment } from '../../api/comment';

function CommentInput({ $target, initialState, refetch }) {
  const $input = document.createElement('input');
  $target.appendChild($input);
  $input.className = 'comment-input';

  const $submitBtn = document.createElement('button');
  $target.appendChild($submitBtn);
  $submitBtn.className = 'comment-submit';

  new SendIcon({ $target: $submitBtn });

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  const handleChangeComment = (e) => {
    this.setState({ value: e.target.value });
  };

  const clickButton = async () => {
    try {
      const { postId, value } = this.state;

      await addComment(postId, value);
      await refetch();

      this.setState({ value: '' });
    } catch (error) {
      alert(error);
    }
  };

  this.render = () => {
    const { value } = this.state;

    $input.value = value;
  };

  $input.addEventListener('change', handleChangeComment);
  $submitBtn.addEventListener('click', clickButton);
}

export default CommentInput;
