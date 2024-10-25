
import { html } from 'lit';
import { BaseComponent } from './utils/BaseComponent';
import '../temp/tw.css'
class App extends BaseComponent {

    render() {
        return html`
            <h1 class="text-4xl font-bold mb-4 text-green-800">Welcome to Lit + Tailwind!</h1>
        `;
    }
}

customElements.define('my-app', App);

const root = document.getElementById('root');
if (root) {
    root.appendChild(new App());
}
