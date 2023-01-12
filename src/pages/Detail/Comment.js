import { deleteComment } from '../../api/comment';
import styled from '../../css/comment.module.scss';
import XIcon from '../../components/icons/XIcon';
import Component from '../../components/Component';

class Comment extends Component {
  view() {
    const { commentId, postId } = this.props.comment;
    return `
      <div class="${styled['comment']}" data-id="${commentId}" data-post-id="${postId}">
        <div class="${styled.content}"></div>
        <button class="${styled['delete-btn']}"></button>
      </div>
    `;
  }

  mount() {
    const $content = this.$component.querySelector(`.${styled.content}`);
    const $deleteBtn = this.$component.querySelector(
      `.${styled['delete-btn']}`,
    );

    const { content } = this.props.comment;
    $content.innerText = content;

    new XIcon($deleteBtn);

    $deleteBtn.addEventListener('click', () => {
      this.handleDeleteComment();
    });
  }

  async handleDeleteComment() {
    if (!this.props.comment.commentId) return;

    const { comment, refetch } = this.props;

    try {
      await deleteComment(comment.commentId);
      await refetch();
    } catch (error) {
      alert(error);
    }
  }
}

function Comments({ $target, initialState, refetch }) {
  const $comment = document.createElement('div');
  $target.appendChild($comment);
  $comment.className = styled['comment'];

  const $content = document.createElement('div');
  $comment.appendChild($content);
  // $content.className =;

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
