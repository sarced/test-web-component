console.log('hello world');
class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `<p>hello world</p>`;
    }
}
customElements.define('hello-world', HelloWorld)
