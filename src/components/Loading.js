import Component from './common/Component';

class Loading extends Component {
  view() {
    return `
      <div class='loading'>
        <div class='loader'>
          <span>로딩중</span>
        </div>
      </div>
    `;
  }
}
export default Loading;
