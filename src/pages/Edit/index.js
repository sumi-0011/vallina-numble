import { editPost, getPost } from '../../api/post';
import Button from '../../components/Button';
import Page from '../../components/common/Page';
import styled from '../../css/post.module.scss';

class Edit extends Page {
  init() {
    this.setState({ title: '', content: '', image: null });
    this.fetchPost();
  }
  view() {
    const { title, content, createdAt, image, updatedAt } = this.state;

    return `
      <div>
        <div class="img-wrapper">
          <img src="${image}" />
        </div>
        <div class="${styled.title} title">
          <h2 class"${styled.heading}">제목</h2>
          <input type="text" placeholder="글 제목을 입력해주세요" value='${title}'/>
        </div>
        <div class="${styled.content} content">
          <h2 class"${styled.heading}">내용</h2>
          <textarea
            cols="30"
            rows="10"
            placeholder="글 내용을 입력해주세요."
          >${content}</textarea>
        </div>
      </div>
      <div class='submit-btn'></div>
    `;
  }

  mount() {
    this.querySelectorChild('.title input').addEventListener('change', (e) => {
      this.setState({ title: e.target.value });
    });

    this.querySelectorChild('.content textarea').addEventListener(
      'change',
      (e) => {
        this.setState({ content: e.target.value });
      },
    );

    new Button(this.querySelectorChild('.submit-btn'), {
      name: '글 수정하기',
      onClick: this.handleSubmit.bind(this),
      className: 'basic',
    });
  }

  async fetchPost() {
    const { postId } = this.props;
    if (!postId) return;

    try {
      const data = await getPost(postId);
      this.setState({ ...data.post });
    } catch (error) {
      alert(error);
    }
  }

  async handleSubmit() {
    const { postId, title, content, image } = this.state;
    if (!postId) return;

    await editPost(postId, title, content, image);
    this.navigate(`/post/${postId}`);
  }
}

export default Edit;
