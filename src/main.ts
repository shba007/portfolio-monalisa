import Splide from "@splidejs/splide";

new Splide(".splide", {
  type: "fade",
  height: "9rem",
  perPage: 4,
  breakpoints: {
    640: {
      height: "6rem",
    },
  },
}).mount();
