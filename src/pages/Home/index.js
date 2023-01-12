import { getPostList } from '../../api/post';
import { routeChange } from '../../router';
import IconTextButton from '../../components/IconTextButton';
import Post from '../../components/Post';
import '../../css/home.scss';
import Page from '../../components/Page';

class Home extends Page {
  view() {
    return `
      <div>
        <div class="button-container"></div>
        <div class="post-list"></div>
      </div>
    `;
  }
  init() {
    this.fetchPosts();
  }

  mount() {
    if (!this.state?.posts) {
      return;
    }

    new IconTextButton({
      $target: this.querySelectorChild('.button-container'),
      initialState: {
        name: '새 글 작성하기',
        className: 'basic',
        onClick: () => this.navigate('/write'),
      },
    });

    this.state.posts.map((post) => {
      new Post({
        $target: this.querySelectorChild('.post-list'),
        initialState: { post },
      });
    });
  }

  async fetchPosts() {
    const data = await getPostList();
    this.setState({ posts: data.posts });
  }

  newPostBtnClick() {}
}

export default Home;
