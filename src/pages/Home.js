import { request } from '../api';
import IconButton from '../components/IconButton';
import Post from '../components/Post';

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

  const renderButton = () => {
    const $button = new IconButton({
      name: '새 글 작성하기',
    });

    $page.appendChild($button);
  };

  const renderPostList = () => {
    this.state.posts.map((post) => {
      const $post = new Post(post);
      $page.appendChild($post);
    });
  };

  this.render = () => {
    if (!this.state?.posts) {
      return;
    }
    renderButton();
    renderPostList();
  };
  fetchPosts();
}

export default Home;
