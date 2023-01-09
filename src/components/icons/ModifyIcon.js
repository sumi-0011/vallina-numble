function ModifyIcon({ $target }) {
  this.state = {};

  const $icon = document.createElement('div');
  $icon.className = 'modify';
  $icon.innerHTML = `
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4627 0.406653C18.7232 0.146273 19.0764 0 19.4447 0C19.813 0 20.1662 0.146273 20.4266 0.406653L24.5933 4.57337C24.8537 4.83383 25 5.18704 25 5.55533C25 5.92361 24.8537 6.27682 24.5933 6.53728L12.0932 19.0374C11.8328 19.2979 11.4796 19.4443 11.1112 19.4444H6.94453C6.57617 19.4444 6.22289 19.298 5.96242 19.0376C5.70195 18.7771 5.55562 18.4238 5.55562 18.0555V13.8888C5.5557 13.5204 5.70208 13.1672 5.96257 12.9068L18.4627 0.406653ZM8.33343 14.4638V16.6666H10.5362L21.6475 5.55533L19.4447 3.35252L8.33343 14.4638ZM0 5.55533C0 4.8186 0.292661 4.11206 0.813602 3.59112C1.33454 3.07018 2.04109 2.77751 2.77781 2.77751H9.72234C10.0907 2.77751 10.444 2.92385 10.7044 3.18432C10.9649 3.44479 11.1112 3.79806 11.1112 4.16642C11.1112 4.53478 10.9649 4.88805 10.7044 5.14852C10.444 5.40899 10.0907 5.55533 9.72234 5.55533H2.77781V22.2222H19.4447V15.2777C19.4447 14.9093 19.591 14.556 19.8515 14.2956C20.1119 14.0351 20.4652 13.8888 20.8336 13.8888C21.2019 13.8888 21.5552 14.0351 21.8157 14.2956C22.0762 14.556 22.2225 14.9093 22.2225 15.2777V22.2222C22.2225 22.9589 21.9298 23.6655 21.4089 24.1864C20.8879 24.7073 20.1814 25 19.4447 25H2.77781C2.04109 25 1.33454 24.7073 0.813602 24.1864C0.292661 23.6655 0 22.9589 0 22.2222V5.55533Z" fill="#0D0D0D"/>
    </svg>
  `;

  this.render = () => {
    $target.appendChild($icon);
  };

  this.render();
}

export default ModifyIcon;
