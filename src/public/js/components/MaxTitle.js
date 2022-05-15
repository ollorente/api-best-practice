class MaxTitle extends HTMLElement {
  set title(title) {
    this.innerHTML = `
    <style>
    </style>
    
    <h1 class="text-2xl text-center font-light">${title}</h1>
    `;
  }
}

customElements.define("max-title", MaxTitle);
