document.addEventListener("DOMContentLoaded", function () {
  // Sembunyikan loading screen setelah halaman selesai dimuat
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
    }, 1000); // Delay 1 detik untuk animasi
  });
});
// // Hobby Item Hover Effect
// const hobbyItems = document.querySelectorAll("hobbies");
// hobbyItems.forEach((item) => {
//   item.addEventListener("mouseenter", function () {
//     const desc = this.querySelector(".hobby-desc");
//     desc.classList.remove("hidden");
//   });

//   item.addEventListener("mouseleave", function () {
//     const desc = this.querySelector(".hobby-desc");
//     desc.classList.add("hidden");
//   });
// });



// Back to Top Button
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".slide-up");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add("slide-up");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load
