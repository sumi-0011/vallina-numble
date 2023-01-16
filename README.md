[![Netlify Status](https://api.netlify.com/api/v1/badges/cd5eba6c-a8ef-44ad-bea8-96cb5bd16474/deploy-status)](https://app.netlify.com/sites/hpny-2023/deploys)

### 백엔드 api 연결

### post

- [x] GET /posts
- [x] GET / post/:postId
- [x] POST /post
- [ ] Patch /post/:postId
- [ ] DELETE /post/:postId

### comment

- [x] POST /comment/:postId
- [x] DELETE /comment/:commentId

## component 구조

```
function Component({ $target, initialState, refetch }) {
  // step 1 : dom element create
  const $component = document.createElement('div');
  $target.appendChild($component);
  $component.className = styled['styled-name'];

  // step 2 : state init
  this.state = initialState;

  // step 3 : component init
  $component.dataset.id = id;

  // step 4 : handle function
  const handleClick = async () => {
    if (!this.state) return;

    try {
      await func();
    } catch (error) {
      alert(error);
    }
  };

  // step 5 : render function
  this.render = () => {
    if (!this.state) {
      return;
    }

    const { content } = this.state;

    $component.innerText = content;
  };

  // step 6: event listener
  $component.addEventListener('click', () => {
    handleClick();
  });

  // step 7 : render function call (생성시, 초기 rendering)
  this.render();
}

export default Component;

```
