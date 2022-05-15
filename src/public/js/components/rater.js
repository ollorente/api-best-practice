export function Rater(ratingElement) {
  const stars = ratingElement.querySelectorAll(".star");

  const ratingHover = (ev) => {
    const currentHover = ev.currentTarget.getAttribute("data-value");
    highlightRating(currentHover);
  };

  const resetRating = (ev) => {
    const currentRating = ratingElement.getAttribute("data-rating");
    highlightRating(currentRating);
  };

  const highlightRating = (rating) => {
    stars.forEach((star) => {
      star.style.color =
        rating >= star.getAttribute("data-value")
          ? "text-yellow-400"
          : "text-gray-400";
    });
  };

  resetRating();

  stars.forEach((star) => {
    star.addEventListener("mouseover", ratingHover);
  });

  ratingElement.addEventListener("mouseout", resetRating);
}
