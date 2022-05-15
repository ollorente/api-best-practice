class MaxStar extends HTMLElement {
  set star(star) {
    this.innerHTML = `
    <style>
    </style>

    <div class="px-1" id="rater-1" data-rating="${star.value}" role="star">
      <span class="text-gray-400" data-value="1">&#9733;</span>
      <span class="text-gray-400" data-value="2">&#9733;</span>
      <span class="text-gray-400" data-value="3">&#9733;</span>
      <span class="text-gray-400" data-value="4">&#9733;</span>
      <span class="text-gray-400" data-value="5">&#9733;</span>
    </div>
    `;
  }
}

customElements.define("max-star", MaxStar);
