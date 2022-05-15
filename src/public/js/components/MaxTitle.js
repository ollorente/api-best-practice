const template = document.createElement("template");
template.innerHTML = `
<style>
  h1 { color: gray; font-weight: 300; }
  .max-text-center {
    text-align: center;
  }
</style>
<h1 class="max-text-center">Welcome to API Best practices!</h1>
`;

class MaxTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content);
  }
}

window.customElements.define("max-title", MaxTitle);
