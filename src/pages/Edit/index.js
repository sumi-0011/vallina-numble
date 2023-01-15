import Page from '@core/Page';
import Button from '@components/Button';
import { editPost, getPost } from '@api/post';

class Edit extends Page {
  init() {
    this.setState({ title: '', content: '', image: null });
    this.fetchPost();
  }

  view() {
    const { title, content, image } = this.state;

    return `
      <div class='edit-page'>
        <div class="img-wrapper">
          <img src="${image}" />
        </div>
        <div class=" title">
          <input type="text" placeholder="제목을 입력해주세요" value='${title}'/>
        </div>
        <div class=" content">
          <textarea
            cols="30"
            rows="10"
            placeholder="내용을 입력해주세요."
          >${content}</textarea>
        </div>
      </div>
      <div class='edit-btn'></div>
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

    new Button(this.querySelectorChild('.edit-btn'), {
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
