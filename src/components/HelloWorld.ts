import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseComponent } from '../utils/BaseComponent';

@customElement('hello-world')
export class HelloWorld extends BaseComponent {

  render() {
    return html`
      <div class="p-4 bg-blue-500 text-white rounded-lg shadow-md">
        <h1 class="text-2xl font-bold">Hello, World!</h1>
        <p class="mt-2">Welcome to Lit with Tailwind CSS!</p>
      </div>
    `;
  }
}
