import Button from '../../components/Button';
import { addPost } from '../../api/post';
import '../../css/new.scss';
import { getRandomPhoto } from '../../api/photo';

function Writing({ $target }) {
  this.state = { title: '', content: '', img: null, loading: false };

  const $page = document.createElement('div');
  $target.appendChild($page);
  $page.className = 'writing';

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.render();
  };

  const getPhoto = async () => {
    const imgUrl = await getRandomPhoto();
    this.setState({ img: imgUrl });
  };

  const handleSubmit = async () => {
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
  };

  const handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  const handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  const handleDeleteBtn = () => {
    this.setState({ img: null });
  };

  this.render = () => {
    const { title, content, img, loading } = this.state;

    $page.innerHTML = `
      <div class="new">
        <div class="new__img-wrapper">
        </div>
        <div class="new__title">
          <h2>제목</h2>
          <input type="text" placeholder="글 제목을 입력해주세요" value='${title}' />
        </div>
        <div class="new__content">
          <h2>내용</h2>
          <textarea
            cols="30"
            rows="10"
            placeholder="글 내용을 입력해주세요."
          >${content}</textarea>
        </div>
        <div class='submit-btn'> 
        </div>
      </div>`;

    const $imgWrapper = $page.querySelector('.new__img-wrapper');
    if (img) {
      const $img = document.createElement('img');
      $imgWrapper.appendChild($img);
      $img.src = this.state.img;

      new Button({
        $target: $imgWrapper,
        initialState: {
          name: 'x',
          className: 'delete-btn',
          onClick: handleDeleteBtn,
        },
      });
    } else {
      new Button({
        $target: $imgWrapper,
        initialState: {
          name: '랜덤 이미지 생성',
          onClick: getPhoto,
        },
      });
    }

    new Button({
      $target: $page.querySelector('.submit-btn'),
      initialState: {
        name: loading ? '로딩중' : '등록하기',
        className: 'basic',
        onClick: handleSubmit,
      },
    });

    const $input = $page.querySelector('.new__title input');
    $input.addEventListener('change', handleTitleChange);

    const $content = $page.querySelector('.new__content textarea');
    $content.addEventListener('change', handleContentChange);
  };
}

export default Writing;
