

const filterTabs = document.querySelector(".filter-tabs");
const filterButtons = document.querySelectorAll(".filter-button");

filterTabs.addEventListener("click", event => {
  const root = document.documentElement;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("filter-button")) {
    root.style.setProperty("--translate-filters-slider", targetTranslateValue);
  }
});


