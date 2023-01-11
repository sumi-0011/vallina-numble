import SendIcon from '../../components/icons/SendIcon';
import { addComment } from '../../api/comment';
import styled from '../../css/comment.module.scss';

function CommentInput({ $target, initialState, refetch }) {
  const $component = document.createElement('div');
  $target.appendChild($component);
  $component.className = styled['input-wrapper'];
  const $input = document.createElement('input');
  $component.appendChild($input);
  $input.className = styled.input;

  const $submitBtn = document.createElement('button');
  $component.appendChild($submitBtn);
  $submitBtn.className = styled['submit-btn'];

  new SendIcon({ $target: $submitBtn, className: 'send-icon' });

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
