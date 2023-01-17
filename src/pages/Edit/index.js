import Page from '@core/Page';
import Button from '@components/Button';
import { editPost, getPost } from '@api/post';
import '@css/edit.scss';

class Edit extends Page {
  init() {
    this.setState({ title: '', content: '', image: null });
    this.setTitle(`HPNY 글 수정`);
    this.fetchPost();
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
  }

  view() {
    const { title, content, image } = this.state;

    return `
      <div class='edit'>
        <div class="edit__img-wrapper">
          <img src="${image}" />
        </div>
        <div class="edit__title">
          <input type="text" placeholder="제목을 입력해주세요" value='${title}'/>
        </div>
        <div class="edit__content">
          <textarea
            cols="30"
            rows="10"
            placeholder="내용을 입력해주세요."
          >${content}</textarea>
        </div>
      </div>
      <div class='edit__btn'></div>
    `;
  }

  mount() {
    this.querySelectorChild('.edit__title input').addEventListener(
      'change',
      (e) => {
        this.setState({ title: e.target.value });
      },
    );

    this.querySelectorChild('.edit__content textarea').addEventListener(
      'change',
      (e) => {
        this.setState({ content: e.target.value });
      },
    );

    new Button(this.querySelectorChild('.edit__btn'), {
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

    this.render();
  }

  async handleSubmit() {
    const { postId, title, content, image } = this.state;
    if (!postId) return;

    try {
      await editPost(postId, title, content, image);
    } catch (error) {
      throw error;
    }
    this.navigate(`/post/${postId}`);
  }
}

export default Edit;
