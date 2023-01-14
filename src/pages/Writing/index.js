import { getRandomPhoto } from '../../api/photo';
import { addPost } from '../../api/post';
import GalleryIcon from '../../components/icons/GalleryIcon';
import Button from '../../components/Button';
import Page from '../../components/common/Page';
import '../../css/new.scss';

class Writing extends Page {
  init() {
    this.setState({ title: '', content: '', img: null });
  }

  view() {
    const { title, content } = this.state;
    return ` 
      <div>
        <div class="new__img-wrapper">
          <div></div>
          <div class='button-wrapper'></div>
        </div>
        <div class="new__title">
          <input type="text" placeholder="제목을 입력해주세요" value='${title}' />
        </div>
        <div class="new__content">
          <textarea cols="30" rows="10" placeholder="내용을 입력해주세요." >${content}</textarea>
        </div>
      </div>
      <div class='submit-btn'></div>
      `;
  }

  mount() {
    const { img, loading } = this.state;

    const $imgWrapper = this.querySelectorChild('.new__img-wrapper');

    if (img) {
      new Button($imgWrapper, {
        name: 'x',
        className: 'delete-btn',
        onClick: this.handleDeleteBtn.bind(this),
      });

      const $img = document.createElement('img');
      $imgWrapper.appendChild($img);
      $img.src = this.state.img;
    } else {
      new GalleryIcon($imgWrapper, {});
      $imgWrapper.addEventListener('click', () => {
        this.getPhoto();
      });
    }

    new Button(this.querySelectorChild('.submit-btn'), {
      name: loading ? '로딩중' : '등록하기',
      onClick: this.handleSubmit.bind(this),
      className: 'basic',
    });

    this.querySelectorChild('.new__title input').addEventListener(
      'change',
      (e) => {
        this.setState({ title: e.target.value });
      },
    );

    this.querySelectorChild('.new__content textarea').addEventListener(
      'change',
      (e) => {
        this.setState({ content: e.target.value });
      },
    );
  }

  handleDeleteBtn() {
    console.log('delete');
    this.setState({ img: null });
  }

  async getPhoto() {
    const imgUrl = await getRandomPhoto();
    this.setState({ img: imgUrl });
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
    }
  }
}

export default Writing;
