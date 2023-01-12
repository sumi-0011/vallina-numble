import Comment from './Comment';
import Detail from './Detail';
import { getPost } from '../../api/post';
import CommentInput from './CommentInput';
import styled from '../../css/detail.module.scss';
import Page from '../../components/Page';

class DetailPage extends Page {
  view() {
    return `
      <div class=${styled['detail-page']}>
        <div class="detail-wrapper"></div>
        <hr/>
        <div class="comment-list ${styled['comment-list']}"></div>
      </div>
    `;
  }

  async init() {
    this.fetchPost();
  }

  mount() {
    if (!this.props?.postId || !this.state?.post?.postId) return;
    const { post, comments } = this.state;
    const { postId } = this.props;

    new Detail(this.$component.querySelector('.detail-wrapper'), {
      postId,
      post,
    });

    comments.map((comment) => {
      new Comment(this.querySelectorChild('.comment-list'), {
        comment,
        refetch: this.fetchPost.bind(this),
      });
    });
    new CommentInput(this.$component, {
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
      alert(error);
    }
  }
}

export default DetailPage;
