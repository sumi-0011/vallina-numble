import styled from '../../css/detail.module.scss';
import IconButton from '../../components/IconButton';

function Detail({ $target, initialState }) {
  const $detail = document.createElement('div');
  $target.appendChild($detail);
  $detail.className = styled['detail'];

  this.state = initialState;

  this.render = () => {
    const { title, postId, content, createdAt, image, updatedAt } =
      this.state.post;

    $detail.innerHTML = `
        <div class=${styled.img}>
          <img src="${image}" />
        </div>
        <div class="detail__wrapper">
          <div class="top">
            <h2 class="${styled.title}">${title}</h2>
            <span class="${styled.date}">${createdAt}</span>
          </div>
          <div class="${styled.content}">${content}</div>
          <div class="${styled.bottom} bottom"></div>
        </div>
    `;

    new IconButton({
      $target: $detail.querySelector('.bottom'),
      initialState: {
        iconName: 'modify',
      },
    });

    new IconButton({
      $target: $detail.querySelector('.bottom'),
      initialState: {
        iconName: 'delete',
      },
    });
  };

  this.render();
}

export default Detail;
