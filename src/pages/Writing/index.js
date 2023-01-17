import { getRandomPhoto } from '@api/photo';
import { addPost } from '@api/post';
import GalleryIcon from '@components/icons/GalleryIcon';
import ImageBox from '@pages/writing/ImageBox';
import Button from '@components/Button';
import Page from '@core/Page';
import '@css/writing.scss';

class Writing extends Page {
  init() {
    this.setState({ title: '', content: '', img: null });
    this.setTitle(`HPNY 글 작성`);
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
  }

  view() {
    const { title, content } = this.state;
    return ` 
      <div>
        <div class="writing__img-wrapper">
          <div></div>
          <div class='button-wrapper'></div>
        </div>
        <div class="writing__title">
          <input type="text" placeholder="제목을 입력해주세요" value='${title}' />
        </div>
        <div class="writing__content">
          <textarea cols="30" rows="10" placeholder="내용을 입력해주세요." >${content}</textarea>
        </div>
      </div>
      <div class='writing__submit-btn'></div>
      `;
  }

  mount() {
    const { img, loading } = this.state;

    const $imgWrapper = this.querySelectorChild('.writing__img-wrapper');

    if (img) {
      new ImageBox($imgWrapper, {
        img,
        onDelete: this.handleDeleteBtn.bind(this),
      });
    } else {
      new GalleryIcon($imgWrapper, {});
      $imgWrapper.addEventListener('click', () => {
        this.getPhoto();
      });
    }

    new Button(this.querySelectorChild('.writing__submit-btn'), {
      name: loading ? '로딩중' : '등록하기',
      onClick: this.handleSubmit.bind(this),
      className: 'basic',
    });

    this.querySelectorChild('.writing__title input').addEventListener(
      'change',
      (e) => {
        this.setState({ title: e.target.value });
      },
    );

    this.querySelectorChild('.writing__content textarea').addEventListener(
      'change',
      (e) => {
        this.setState({ content: e.target.value });
      },
    );
  }

  handleDeleteBtn() {
    this.setState({ img: null });
    this.render();
  }

  async getPhoto() {
    const imgUrl = await getRandomPhoto();
    this.setState({ img: imgUrl });
    this.render();
  }

  async handleSubmit() {
    this.setState({ loading: true });
    try {
      const { title, content, img } = this.state;
      await addPost(title, content, img);

      window.location.href = '/';
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ loading: false });
      this.render();
    }
  }
}

export default Writing;
