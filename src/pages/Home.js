import { request } from '../api';
import Post from '../components/post';

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
    this.state.posts.map((post) => {
      const $post = new Post({ $target: $page, post });
      $page.appendChild($post);
    });
  };
  fetchPosts();
}

export default Home;
