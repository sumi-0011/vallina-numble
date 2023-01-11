import Comment from '../components/Comment';
import Detail from '../components/Detail';
import { getPost } from '../api/post';
import SendIcon from '../components/icons/SendIcon';
import { addComment } from '../api/comment';

function DetailPage({ $target, postId }) {
  this.state = { postId, post: null, comments: [], inputComment: '' };

  const $page = document.createElement('div');
  $target.appendChild($page);
  $page.className = 'detail-page';

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  const fetchPost = async () => {
    const { postId } = this.state;
    const data = await getPost(postId);
    this.setState({ post: data.post, comments: data.comments });
  };

  const clickButton = async () => {
    try {
      const { postId, inputComment } = this.state;
      await addComment(postId, inputComment);
      this.setState({ inputComment: '' });

      await fetchPost();
    } catch (error) {
      alert(error);
    }
  };

  const handleChangeComment = (e) => {
    this.setState({ inputComment: e.target.value });
  };

  this.render = () => {
    const { postId, post, comments, inputComment } = this.state;

    if (!postId || !post) {
      return;
    }

    $page.innerHTML = `
      <div class="detail-wrapper"></div>
      <hr/>
      <div class="comment-list"></div>
      <div class="comment-input-wrapper"></div>
    `;

    new Detail({
      $target: $page.querySelector('.detail-wrapper'),
      initialState: { postId, post },
    });

    comments.map((comment) => {
      new Comment({
        $target: $page.querySelector('.comment-list'),
        initialState: { comment },
      });
    });

    const $inputWrapper = $page.querySelector('.comment-input-wrapper');
    const $commentInput = document.createElement('input');
    $commentInput.className = 'comment-input';
    $commentInput.value = inputComment;
    $commentInput.addEventListener('change', handleChangeComment);

    const $commentAddBtn = document.createElement('button');
    $commentAddBtn.className = 'comment-submit';
    $commentAddBtn.addEventListener('click', clickButton);

    $inputWrapper.appendChild($commentInput);
    $inputWrapper.appendChild($commentAddBtn);
    new SendIcon({ $target: $commentAddBtn });
  };

  fetchPost();
}

export default DetailPage;
