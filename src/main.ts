import Splide from "@splidejs/splide";

// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    gap: "15rem",
    focus: "center",
    autoWidth: true,
    autoHeight: true,
  }).mount();
});
// document.addEventListener("DOMContentLoaded", function () {
//   new Splide("#image-carousel").mount();
// });
