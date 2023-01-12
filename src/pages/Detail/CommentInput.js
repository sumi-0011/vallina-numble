import SendIcon from '../../components/icons/SendIcon';
import { addComment } from '../../api/comment';
import styled from '../../css/comment.module.scss';
import Component from '../../components/Component';
class CommentInput extends Component {
  view() {
    return `
      <div class="${styled['input-wrapper']}">
        <input type="text"  class="${styled.input}"/>  
        <button class="${styled['submit-btn']}"></button>
      </div>
  `;
  }

  mount() {
    const $submitBtn = this.$component.querySelector(
      `.${styled['submit-btn']}`,
    );
    new SendIcon({ $target: $submitBtn, className: 'send-icon' });
    const $input = this.$component.querySelector(`.${styled.input}`);

    $input.addEventListener('change', (e) => {
      this.setState({ value: e.target.value });
    });

    $submitBtn.addEventListener('click', this.clickButton.bind(this));
  }

  async clickButton() {
    if (!this.props.postId) return;
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
