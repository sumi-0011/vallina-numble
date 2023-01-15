import Component from '@core/Component';
import SendIcon from '@components/icons/SendIcon';
import { addComment } from '@api/comment';

class CommentInput extends Component {
  init() {
    this.setState({ value: '' });
  }

  view() {
    return `
      <input type="text" class="input" />  
      <button class="submit-btn"></button>
  `;
  }

  mount() {
    const $submitBtn = this.querySelectorChild(`.submit-btn`);
    const $input = this.querySelectorChild(`.input`);

    new SendIcon($submitBtn);
    $submitBtn.addEventListener(
      'click',
      this.handleCommentSubmitBtnClick.bind(this),
    );

    $input.addEventListener('change', (e) => {
      this.setState({ value: e.target.value });
    });

    $input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.setState({ value: e.target.value });
        this.handleCommentSubmitBtnClick();
      }
    });
  }

  async handleCommentSubmitBtnClick() {
    if (!this.props.postId || !this.state.value) return;

    try {
      const { postId, refetch } = this.props;
      const { value } = this.state;

      await addComment(postId, value);
      await refetch();

      this.setState({ value: '' });
    } catch (error) {
      alert(error);
    }
  }
}

export default CommentInput;
