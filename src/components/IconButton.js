import Button from './Button';

function IconButton({ icon, name, onClick }) {
  const $wrapper = document.createElement('div');
  $wrapper.className = 'icon-button';

  const $btn = new Button({ name, onClick });
  $wrapper.appendChild($btn);

  return $wrapper;
  // $page.innerHTML = ``;

  // this.render = () => {
  //   $target.appendChild($wrapper);
  // };
}

export default IconButton;
