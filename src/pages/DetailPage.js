import Comment from '../components/Comment';
import Detail from '../components/Detail';
import { request } from '../api';

function DetailPage({ $target, postId }) {
  this.state = { postId, post: null, comments: [] };

  const $page = document.createElement('div');
  $target.appendChild($page);

  $page.className = 'Detail';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchPosts = async () => {
    const { postId } = this.state;
    const { data } = await request(`/post/${postId}`);
    console.log('data: ', data);
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
      <div class="comment-list"></div>
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
  };

  fetchPosts();
}

export default DetailPage;
