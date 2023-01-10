import Button from '../components/Button';
import { addPost } from '../api/post';
import '../css/new.scss';
function Writing({ $target }) {
  this.state = {};

  const $page = document.createElement('div');
  $page.className = 'Writing';
  $page.innerHTML = `
    <div class="new">
      <div class="new__img-wrapper"></div>
      <div class="new__title">
        <h2>제목</h2>
        <input type="text" placeholder="글 제목을 입력해주세요" />
      </div>
      <div class="new__content">
        <h2>내용</h2>
        <textarea
          cols="30"
          rows="10"
          placeholder="글 내용을 입력해주세요."
        ></textarea>
      </div>
      <div class='submit-btn'></div>
    </div>`;

  const handleSubmit = async () => {
    const data = await addPost(
      'titasdle-asdasd',
      'contasdasdasdadsent-tasdasdasdasdsdestaasdsd',
      '',
    );
    console.log('handleSubmit data: ', data);
  };

  this.render = () => {
    $target.appendChild($page);

    new Button({
      $target: $page.querySelector('.submit-btn'),
      initialState: {
        name: '등록하기',
        onClick: handleSubmit,
      },
    });
  };
}

export default Writing;
