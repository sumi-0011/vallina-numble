import { editPost, getPost } from '../../api/post';
import Button from '../../components/Button';
import styled from '../../css/post.module.scss';

function Edit({ $target, postId }) {
  this.state = { postId };

  const $page = document.createElement('div');
  $target.appendChild($page);
  $page.className = styled['edit-page'];

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  const fetchPost = async () => {
    const { postId } = this.state;
    if (!postId) return;
    try {
      const data = await getPost(postId);
      console.log('data: ', data);
      this.setState({ ...data.post });
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async () => {
    console.log();
    const { postId, title, content, image } = this.state;
    await editPost(postId, title, content, image);

    window.location.href = `/post/${postId}`;
  };

  const handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  const handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  this.render = () => {
    const { postId } = this.state;

    if (!postId) {
      return;
    }

    const { title, content, createdAt, image, updatedAt } = this.state;

    $page.innerHTML = `
      <div class="img-wrapper">
        <img src="${image}" />
      </div>
      <div class="${styled.title} title">
        <h2 class"${styled.heading}">제목</h2>
        <input type="text" placeholder="글 제목을 입력해주세요" value='${title}'
         />
      </div>
      <div class="${styled.content} content">

        <h2 class"${styled.heading}">내용</h2>
        <textarea
          cols="30"
          rows="10"
          placeholder="글 내용을 입력해주세요."
        >${content}</textarea>
      </div>
      <div class='submit-btn'></div>
    `;

    const $title = $page.querySelector('.title input');
    $title.addEventListener('change', handleTitleChange);

    const $content = $page.querySelector('.content textarea');
    $content.addEventListener('change', handleContentChange);

    new Button({
      $target: $page.querySelector('.submit-btn'),
      initialState: {
        name: '글 수정하기',
        onClick: handleSubmit,
        className: 'basic',
      },
    });
  };

  fetchPost();
}

export default Edit;
