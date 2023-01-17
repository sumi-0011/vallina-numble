import Page from '@core/Page';
import CommentInput from '@pages/detail/CommentInput';
import Comment from '@pages/detail/Comment';
import Detail from '@pages/detail/Detail';
import { getPost } from '@api/post';
import '@css/detail.scss';
import '@css/comment.scss';

class DetailPage extends Page {
  init() {
    const { postId } = this.props;
    this.setTitle(`HPNY 상세 ${postId ?? ''}`);

    this.fetchPost();
  }

  view() {
    return `
      <div class="detail"></div>
      <hr/>
      <div class="comment-list"></div>
      <div class="comment-input-wrapper"></div>
    `;
  }

  mount() {
    if (!this.props?.postId || !this.state?.post?.postId) return;

    const { post, comments } = this.state;
    const { postId } = this.props;

    new Detail(this.$target.querySelector('.detail'), {
      postId,
      post,
    });

    comments.map((comment) => {
      const $comment = document.createElement('div');
      $comment.className = 'comment';
      this.querySelectorChild('.comment-list').appendChild($comment);

      new Comment($comment, {
        comment,
        refetch: this.fetchPost.bind(this),
      });
    });

    new CommentInput(this.querySelectorChild('.comment-input-wrapper'), {
      postId,
      refetch: this.fetchPost.bind(this),
    });
  }

  async fetchPost() {
    const { postId } = this.props;
    if (!postId) return;
    try {
      const data = await getPost(postId);
      this.setState({ post: data.post, comments: data.comments });
    } catch (error) {
      if (error.message === 'Invalid post id') {
        alert('글을 불러올 수 없습니다. ');
      } else {
        alert(error);
      }
      this.navigate('/');
    }
  }
}

export default DetailPage;
