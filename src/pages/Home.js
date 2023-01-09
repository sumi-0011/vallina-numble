import { request } from '../api';

function Home({ $target, initialState }) {
  this.state = initialState;

  const $page = document.createElement('div');
  $target.appendChild($page);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchPosts = async () => {
    const { data } = await request('/posts');
    this.setState({ ...this.state, posts: data.posts });

    this.render();
  };

  const renderPost = ({ title, content, postId }) => {
    return `<div class="post" data-id="${postId}">
        <div class="post__title">${title}</div>
        <div class="post__content">${content}</div>
      </div>`;
  };
  this.render = () => {
    if (!this.state?.posts) {
      return;
    }
    $page.innerHTML = `
      ${this.state.posts.map((post) => renderPost(post)).join('')}
    `;
  };
  fetchPosts();
}

export default Home;
