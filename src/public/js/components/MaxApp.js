const template = document.createElement("template");
template.innerHTML = `
<style>
@import url('https://cdn.tailwindcss.com');
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.w-full { width: 100%; }
.h-full { height: 100%; }
.p-3 { padding: 0.75rem; }
.text-center { text-align: center; }
.bg-white { background-color: rgb(255 255 255); }
.rounded { border-radius: 0.25rem; }
.shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);}
</style>
<div class="w-full h-full p-3">
  <h1 class="w-full text-center">Welcome to API Best practices!</h1>
  <div class="bg-white rounded shadow-sm p-3">Card</div>
</div>
`;

class MaxApp extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content);
  }
}

window.customElements.define("max-app", MaxApp);
