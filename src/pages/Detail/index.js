import Comment from '../../components/Comment';
import Detail from '../../components/Detail';
import { getPost } from '../../api/post';
import CommentInput from './CommentInput';

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
    if (!postId) return;
    try {
      const data = await getPost(postId);
      this.setState({ post: data.post, comments: data.comments });
    } catch (error) {
      alert(error);
    }
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
        initialState: {
          comment,
        },
        refetch: fetchPost,
      });
    });

    new CommentInput({
      $target: $page.querySelector('.comment-input-wrapper'),
      initialState: {
        postId,
      },
      refetch: fetchPost,
    });
  };

  fetchPost();
}

export default DetailPage;
