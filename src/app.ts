import { customElement } from 'lit/decorators.js';
import { BaseComponent } from './utils/BaseComponent';
import { html } from 'lit';
import '../temp/tw.css';
import './components/HelloWorld';

@customElement('my-app')
class App extends BaseComponent {
    render() {
        return html`
            <h1 class="text-4xl font-bold mb-4 text-green-800">Welcome to Lit + Tailwind!</h1>
            <hello-world></hello-world>
        `;
    }
}

// Attach the app to the DOM
const root = document.getElementById('root');
if (root) {
    root.appendChild(new App());
}
