import Comment from '../components/Comment';
import Detail from '../components/Detail';
import CommentInput from '../components/CommentInput';
import { getPost } from '../api/post';

function DetailPage({ $target, postId }) {
  this.state = { postId, post: null, comments: [] };

  const $page = document.createElement('div');
  $target.appendChild($page);

  $page.className = 'detail-page';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchPosts = async () => {
    const { postId } = this.state;
    const data = await getPost(postId);
    this.setState({ ...this.state, post: data.post, comments: data.comments });

    this.render();
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

    new CommentInput({
      $target: $page.querySelector('.comment-input-wrapper'),
    });
  };

  fetchPosts();
}

export default DetailPage;
