import './style.css';
import templateImg from './template.svg';

const root = document.querySelector('#root');

const container = document.createElement('div');
container.id = 'container';


const message = document.createElement('h1');
message.textContent = "Hello world!";
container.appendChild(message);

const image = new Image();
image.src = templateImg;
container.appendChild(image);

root.appendChild(container);
