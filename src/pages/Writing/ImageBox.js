import Component from '@core/Component';

class ImageBox extends Component {
  view() {
    const { img } = this.props;

    return `
      <button class='delete-btn'>x</button>
      <img src="${img}"/>
    `;
  }

  mount() {
    const { onDelete } = this.props;

    this.querySelectorChild('.delete-btn').addEventListener('click', () => {
      onDelete();
    });
  }
}

export default ImageBox;
