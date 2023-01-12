import { getPostList } from '../../api/post';
import { routeChange } from '../../router';
import Button from '../../components/Button';
import Post from './Post';
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

    new Button(this.querySelectorChild('.button-container'), {
      name: '새 글 작성하기',
      className: 'basic',
      onClick: () => this.navigate('/write'),
    });

    this.state.posts.map((post) => {
      new Post(this.querySelectorChild('.post-list'), { post });
    });
  }

  async fetchPosts() {
    const data = await getPostList();
    this.setState({ posts: data.posts });
  }

  newPostBtnClick() {}
}

export default Home;
