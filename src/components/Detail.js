import '../css/detail.scss';
import IconButton from '../components/IconButton';

function Detail({ $target, initialState }) {
  const $detail = document.createElement('div');
  $detail.className = 'detail';

  this.state = initialState;

  this.render = () => {
    const { title, postId, content, createdAt, image, updatedAt } =
      this.state.post;

    $detail.innerHTML = `
        <div class="detail__img">
          <img src="${image}" />
        </div>
        <div class="detail__wrapper">
          <div class="detail__top">
            <h2 class="detail__title">${title}</h2>
            <span class="detail__date">${createdAt}</span>
          </div>
          <div class="detail__content">${content}</div>
          <div class="detail__bottom"></div>
        </div>
    `;
    new IconButton({
      $target: $detail.querySelector('.detail__bottom'),
      initialState: {
        iconName: 'modify',
      },
    });
    new IconButton({
      $target: $detail.querySelector('.detail__bottom'),
      initialState: {
        iconName: 'delete',
      },
    });
    $target.appendChild($detail);
  };

  this.render();
}

export default Detail;
