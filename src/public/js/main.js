import { Rater } from "./components/rater";

document.addEventListener("DOMContentLoaded", function () {
  const raters = document.querySelectorAll('[role="rater"]');
  raters.forEach((rater) => {
    new Rater(rater);
  });
});
