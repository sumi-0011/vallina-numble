import Component from '@core/Component';

const color = '#525252';

class RemoveIcon extends Component {
  view() {
    return `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.59998 2.75999C6.59998 2.08104 6.86969 1.42989 7.34979 0.949796C7.82988 0.469703 8.48103 0.199989 9.15998 0.199989H16.84C17.5189 0.199989 18.1701 0.469703 18.6502 0.949796C19.1303 1.42989 19.4 2.08104 19.4 2.75999V5.31999H24.52C24.8595 5.31999 25.185 5.45485 25.4251 5.69489C25.6651 5.93494 25.8 6.26051 25.8 6.59999C25.8 6.93947 25.6651 7.26504 25.4251 7.50509C25.185 7.74513 24.8595 7.87999 24.52 7.87999H23.1517L22.0419 23.4217C21.9959 24.0676 21.7069 24.6721 21.2331 25.1134C20.7593 25.5547 20.1358 25.8 19.4883 25.8H6.51038C5.86288 25.8 5.23943 25.5547 4.76559 25.1134C4.29176 24.6721 4.00275 24.0676 3.95678 23.4217L2.84958 7.87999H1.47998C1.1405 7.87999 0.814932 7.74513 0.574885 7.50509C0.334838 7.26504 0.199982 6.93947 0.199982 6.59999C0.199982 6.26051 0.334838 5.93494 0.574885 5.69489C0.814932 5.45485 1.1405 5.31999 1.47998 5.31999H6.59998V2.75999ZM9.15998 5.31999H16.84V2.75999H9.15998V5.31999ZM5.4147 7.87999L6.51166 23.24H19.4896L20.5865 7.87999H5.4147ZM10.44 10.44C10.7795 10.44 11.105 10.5748 11.3451 10.8149C11.5851 11.0549 11.72 11.3805 11.72 11.72V19.4C11.72 19.7395 11.5851 20.065 11.3451 20.3051C11.105 20.5451 10.7795 20.68 10.44 20.68C10.1005 20.68 9.77493 20.5451 9.53489 20.3051C9.29484 20.065 9.15998 19.7395 9.15998 19.4V11.72C9.15998 11.3805 9.29484 11.0549 9.53489 10.8149C9.77493 10.5748 10.1005 10.44 10.44 10.44ZM15.56 10.44C15.8995 10.44 16.225 10.5748 16.4651 10.8149C16.7051 11.0549 16.84 11.3805 16.84 11.72V19.4C16.84 19.7395 16.7051 20.065 16.4651 20.3051C16.225 20.5451 15.8995 20.68 15.56 20.68C15.2205 20.68 14.8949 20.5451 14.6549 20.3051C14.4148 20.065 14.28 19.7395 14.28 19.4V11.72C14.28 11.3805 14.4148 11.0549 14.6549 10.8149C14.8949 10.5748 15.2205 10.44 15.56 10.44Z" fill="${color}"/>
      </svg>
    `;
  }
  mount() {
    this.$target.classList.add('icon');
  }
}
export default RemoveIcon;
