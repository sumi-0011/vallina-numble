import Comment from '../components/Comment';
import Detail from '../components/Detail';

function DetailPage({ $target, postId }) {
  this.state = { postId };

  const $page = document.createElement('div');
  $target.appendChild($page);

  $page.className = 'Detail';

  this.render = () => {
    $page.innerHTML = `
      <div class="detail-wrapper"></div>
      <div class="comment-list"></div>
    `;

    new Detail({
      $target: $page.querySelector('.detail-wrapper'),
      initialState: {},
    });
    new Comment({
      $target: $page.querySelector('.comment-list'),
      initialState: {},
    });
  };
}

export default DetailPage;
