import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseComponent } from '../utils/BaseComponent';

@customElement('hello-world')
export class HelloWorld extends BaseComponent {
  static customStyles() {
    return [
      css`
        .custom-bg {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .custom-text {
          font-size: 1.5rem;
          color: #ffcc00;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="p-4 bg-blue-500 text-white rounded-lg shadow-md custom-bg">
        <h1 class="text-2xl font-bold">Hello, World!</h1>
        <p class="mt-2 custom-text">Welcome to Lit with Tailwind CSS!</p>
      </div>
    `;
  }
}
