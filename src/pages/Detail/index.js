import Comment from './Comment';
import Detail from './Detail';
import { getPost } from '../../api/post';
import CommentInput from './CommentInput';
import styled from '../../css/detail.module.scss';

function DetailPage({ $target, postId }) {
  this.state = { postId, post: null, comments: [], inputComment: '' };

  const $page = document.createElement('div');
  $target.appendChild($page);
  $page.className = styled['detail-page'];

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
      <div class="comment-list ${styled['comment-list']}"></div>
    `;

    new Detail($page.querySelector('.detail-wrapper'), { postId, post });

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
      $target: $page,
      initialState: {
        postId,
      },
      refetch: fetchPost,
    });
  };

  fetchPost();
}

export default DetailPage;
