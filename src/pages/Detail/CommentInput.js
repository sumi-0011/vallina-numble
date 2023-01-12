import { addComment } from '../../api/comment';
import SendIcon from '../../components/icons/SendIcon';
import Component from '../../components/common/Component';
import styled from '../../css/comment.module.scss';

class CommentInput extends Component {
  init() {
    this.setState({ value: '' });
  }

  view() {
    return `
      <div class="${styled['input-wrapper']}">
        <input type="text" class="${styled.input}"/>  
        <button class="${styled['submit-btn']}"></button>
      </div>
  `;
  }

  mount() {
    const $submitBtn = this.querySelectorChild(`.${styled['submit-btn']}`);
    const $input = this.querySelectorChild(`.${styled.input}`);

    new SendIcon($submitBtn);
    $submitBtn.addEventListener('click', this.clickButton.bind(this));

    $input.addEventListener('change', (e) => {
      this.setState({ value: e.target.value });
    });
  }

  async clickButton() {
    if (!this.props.postId) return;
    if (!this.state.value) return;

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
