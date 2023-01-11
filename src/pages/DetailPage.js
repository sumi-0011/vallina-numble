import Comment from '../components/Comment';
import Detail from '../components/Detail';
import { getPost } from '../api/post';
import SendIcon from '../components/icons/SendIcon';
import { addComment } from '../api/comment';

function DetailPage({ $target, postId }) {
  this.state = { postId, post: null, comments: [] };

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
      const { postId } = this.state;
      const response = await addComment(
        postId,
        '안asdasdas녕아ㅏㅣasasasasdadsdadsdsddasddas미만ㅇ',
      );

      await fetchPost();
    } catch (error) {
      alert(error);
    }
  };

  this.render = () => {
    const { postId, post, comments } = this.state;

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
