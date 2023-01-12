import styled from '../../css/detail.module.scss';
import IconButton from './IconButton';
import Component from '../../components/common/Component';

class Detail extends Component {
  view() {
    const { title, postId, content, createdAt, image } = this.props.post;
    return `
      <div class="${styled.detail}">
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
      </div>
    `;
  }

  mount() {
    const { title, postId, content, createdAt, image } = this.props.post;

    const $iconWrapper = this.$component.querySelector('.bottom');
    new IconButton($iconWrapper, {
      icon: 'edit',
      onClick: () => {
        this.navigate(`/edit/${postId}`);
      },
    });

    new IconButton($iconWrapper, {
      icon: 'remove',
      onClick: () => {
        // this.navigate(`/edit/${postId}`);
      },
    });
  }
}

export default Detail;
