import Comment from './Comment';
import Detail from './Detail';
import { getPost } from '../../api/post';
import CommentInput from './CommentInput';
import styled from '../../css/detail.module.scss';
import Page from '../../components/common/Page';

class DetailPage extends Page {
  init() {
    this.fetchPost();
  }

  view() {
    return `
      <div class="detail-wrapper"></div>
      <hr/>
      <div class="comment-list ${styled['comment-list']}"></div>
      <div class="comment-input-wrapper"></div>
    `;
  }

  mount() {
    if (!this.props?.postId || !this.state?.post?.postId) return;
    const { post, comments } = this.state;
    const { postId } = this.props;

    new Detail(this.$target.querySelector('.detail-wrapper'), {
      postId,
      post,
    });

    comments.map((comment) => {
      new Comment(this.querySelectorChild('.comment-list'), {
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
