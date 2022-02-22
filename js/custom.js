$(document).ready(function () {
  // parallax background;
  $("#banner").parallax({ imageSrc: "../images/banner.jpg" });

  // typing effect;
  var typed = new Typed(".element", {
    strings: ["web designer", "photographer", "web developer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });

  // countdown jquery;
  $("#countdown").countdown({
    year: 2023, // YYYY Format

    month: 1, // 1-12

    day: 1, // 1-31

    hour: 0, // 24 hour format 0-23

    minute: 0, // 0-59

    second: 0, // 0-59
  });
});
