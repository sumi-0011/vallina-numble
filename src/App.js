import Home from './pages/Home';
import DetailPage from './pages/Detail';
import WritingPage from './pages/Writing';
import { init } from './router';
import Edit from './pages/Edit';

function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = ` 
        <header></header>
        <div class='content'></div>
   `;

    const $content = $target.querySelector('.content');

    if (pathname === '/') {
      new Home($content);
    } else if (pathname.indexOf('post') === 1) {
      const [, , postId] = pathname.split('/');
      new DetailPage($content, { postId });
    } else if (pathname.indexOf('edit') === 1) {
      const [, , postId] = pathname.split('/');
      new Edit({ $target: $content, postId }).render();
    } else if (pathname === '/write') {
      new WritingPage({ $target: $content }).render();
    }
  };

  init(this.route);

  // 뒤로가기를 했을때 렌더링이 되지 않은 문제
  // window의 popstate 이벤트를 통해, 뒤로가기나 앞으로 가기 등으로 브라우저의 URL이 변경된 경우를 감지
  window.addEventListener('popstate', this.route);

  this.route();
}

export default App;
