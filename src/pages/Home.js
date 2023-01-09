import { request } from '../api';
import IconButton from '../components/IconButton';
import Post from '../components/Post';
import '../css/home.scss';

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

  this.render = () => {
    if (!this.state?.posts) {
      return;
    }
    $page.innerHTML = `
      <div class="button-container"></div>
      <div class="post-list"></div>
      
    `;
    new IconButton({
      $target: $page.querySelector('.button-container'),
      initialState: {
        name: '새 글 작성하기',
      },
    });

    this.state.posts.map((post) => {
      new Post({
        $target: $page.querySelector('.post-list'),
        initialState: { post },
      });
    });
  };

  fetchPosts();
}

export default Home;
