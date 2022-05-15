class MaxRoutine extends HTMLElement {
  set workout(workout) {
    this.innerHTML = `
    <style>
    </style>

    <a href="/#/workouts/${workout.id}" class="">
      <div class="bg-white shadow rounded mb-3">
        <div class="p-3">
          <h5 class="text-l text-gray-800 font-bold">${workout.name || ""}</h5>
          <p class="text-gray-800">${workout.mode || ""}</p>
          <p class="text-gray-400">${workout.createdAt || ""}</p>
          <max-star></max-star>
        </div>
      </div>
    </a>
    `;
  }
}

customElements.define("max-routine", MaxRoutine);
