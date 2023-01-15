import Page from '@core/Page';
import Post from '@pages/home/Post';
import Button from '@components/Button';
import { getPostList } from '@api/post';
import '@css/home.scss';

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
      const $post = document.createElement('div');
      $post.className = 'post-wrapper';
      this.querySelectorChild('.post-list').appendChild($post);
      new Post($post, { post });
    });
  }

  async fetchPosts() {
    const data = await getPostList();
    this.setState({ posts: data.posts });
  }
}

export default Home;
