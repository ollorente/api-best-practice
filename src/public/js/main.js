// import "./components/MaxApp.js";
import "./components/MaxRoutine.js";
import "./components/MaxStar.js";
// import "./components/MaxTitle.js";
import { BASE_URL_API } from "./workoutsApi.js";
// import { Rater } from "./components/rater";

window.addEventListener("load", () => {
  // setApp();
  // setTitle();
  fetchWorkouts();
});

// document.addEventListener("DOMContentLoaded", function () {
//   const raters = document.querySelectorAll('[role="rater"]');
//   raters.forEach((rater) => {
//     new Rater(rater);
//   });
// });

// async function setApp() {
//   document.querySelector("max-app");
// }

// async function setTitle(title) {
//   const app = document.querySelector("max-app");
//   const el = document.createElement("max-title");
//   el.title = title;
//   app.appendChild(el);
// }

async function fetchWorkouts() {
  const res = await fetch(BASE_URL_API);
  const json = await res.json();

  const section = document.querySelector("section");

  json.data.forEach((workout) => {
    const el = document.createElement("max-routine");
    const star = document.createElement("max-star");
    el.workout = workout;
    el.MaxStar = star;
    section.appendChild(el);
  });
}
