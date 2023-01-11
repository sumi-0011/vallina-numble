import Button from '../components/Button';
import { addPost } from '../api/post';
import '../css/new.scss';
function Writing({ $target }) {
  this.state = { title: '', content: '' };

  const $page = document.createElement('div');
  $target.appendChild($page);
  $page.className = 'Writing';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const handleSubmit = async () => {
    const { title, content } = this.state;
    const data = await addPost(title, content, '');
    console.log('data: ', data);
  };

  const handleValueChange = (e, key) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  this.render = () => {
    const { title, content } = this.state;

    $page.innerHTML = `
      <div class="new">
        <div class="new__img-wrapper"></div>
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
        <div class='submit-btn'></div>
      </div>`;

    new Button({
      $target: $page.querySelector('.submit-btn'),
      initialState: {
        name: '등록하기',
        onClick: handleSubmit,
      },
    });

    const $input = $page.querySelector('.new__title input');
    $input.addEventListener('change', (e) => {
      handleValueChange(e, 'title');
    });

    const $content = $page.querySelector('.new__content textarea');
    $content.addEventListener('change', (e) => {
      handleValueChange(e, 'content');
    });
  };
}

export default Writing;
