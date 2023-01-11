import { getPostList } from '../api/post';
import { routeChange } from '../router';
import IconTextButton from '../components/IconTextButton';
import Post from '../components/Post';
import '../css/home.scss';

function Home({ $target, initialState }) {
  this.state = initialState;

  const $page = document.createElement('div');
  $target.appendChild($page);

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  const fetchPosts = async () => {
    const data = await getPostList();

    this.setState({ posts: data.posts });
  };

  const newPostBtnClick = () => {
    routeChange('/write');
  };

  this.render = () => {
    if (!this.state?.posts) {
      return;
    }

    $page.innerHTML = `
      <div class="button-container"></div>
      <div class="post-list"></div>
    `;

    new IconTextButton({
      $target: $page.querySelector('.button-container'),
      initialState: {
        name: '새 글 작성하기',
        className: 'basic',
        onClick: newPostBtnClick,
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
