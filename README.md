### 백엔드 api 연결

### post

- [ ] GET /posts
- [ ] GET / post/:postId
- [ ] POST /post
- [ ] Patch /post/:postId
- [ ] DELETE /post/:postId

### comment

- [ ] POST /comment/:postId
- [ ] DELETE /comment/:commentId

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
