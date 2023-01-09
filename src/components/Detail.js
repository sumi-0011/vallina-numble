function Detail({ $target, initialState }) {
  const $detail = document.createElement('div');
  $detail.className = 'detail';

  this.state = initialState;

  this.render = () => {
    $detail.innerHTML = `
        <div class="detail__img"></div>
        <div class="detail__wrapper">
          <div class="detail__top">
            <h2 class="detail__title">신년계획</h2>
            <span class="detail__date"></span>
          </div>
          <div class="detail__content"></div>
          <div class="detail__bottom"></div>
        </div>
    `;
    $target.appendChild($detail);
  };

  this.render();
}

export default Detail;
