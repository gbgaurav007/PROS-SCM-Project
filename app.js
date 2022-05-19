// Scroll reveal navbar

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrollValue = window.pageYOffset;

  if (scrollValue > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (scrollValue < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
  }

  lastScroll = scrollValue;
});

// Top hero animation

gsap.from(".name", { opacity: 0, duration: 1, y: -30 });
gsap.from(".subject", { opacity: 0, duration: 1.5, y: 30, delay: 0.5 });
gsap.from(".down-arrow", { opacity: 0, duration: 1, y: -30, delay: 1.5 });

// Scroll reveal resource element

const sliders = document.querySelectorAll(".slide");
const scrollOptions = { rootMargin: "-150px" };

const onScroll = new IntersectionObserver((entries, onScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      onScroll.unobserve(entry.target);
    }
  });
}, scrollOptions);

sliders.forEach((slide) => {
  onScroll.observe(slide);
});

// Table fade-up animation

const tableSection = document.querySelector(".table-area");

const tableScroll = new IntersectionObserver((entries, tableScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      tableScroll.unobserve(entry.target);
    }
  });
}, scrollOptions);

onScroll.observe(tableSection);