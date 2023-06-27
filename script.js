// Spinner
window.addEventListener("load", function () {
  let spinner = document.getElementById("spinner");

  setTimeout(() => {
    spinner.style.display = "none";
  }, 1000);
});

// Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.getElementById("hamburger");
  let nav = document.getElementById("navigation");

  hamburger.addEventListener("click", function () {
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });

  let navigationLinks = document.querySelectorAll(".navigation-link");

  navigationLinks.forEach((navigationLink) => {
    navigationLink.addEventListener("click", function (event) {
      if (window.innerWidth < 650) {
        let submenu = this.querySelector(".submenu");

        navigationLinks.forEach((otherNavigationLink) => {
          if (otherNavigationLink !== navigationLink) {
            let otherSubmenu = otherNavigationLink.querySelector(".submenu");
            if (otherSubmenu) {
              otherSubmenu.style.display = "none";
            }
          }
        });

        if (submenu.style.display === "none" || submenu.style.display === "") {
          event.preventDefault();
          submenu.style.display = "block";
        } else {
          submenu.style.display = "none";
        }
      }
    });
  });

  let submenuLinks = document.querySelectorAll(".submenu a");

  submenuLinks.forEach((submenuLink) => {
    submenuLink.addEventListener("click", function () {
      if (window.innerWidth < 650) {
        nav.style.display = "none";
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 650) {
      nav.style.display = "";
      document.querySelectorAll(".submenu").forEach((submenu) => {
        submenu.style.display = "";
      });
    }
  });

});

// Micro animations
document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

  tl.delay(1.5);

  tl.from(".header-image-section", {
    x: -200,
    opacity: 0,
    duration: 1.25,
  });

  tl.from(".header-text-section", {
    opacity: 0,
    duration: 1.5,
  });

  if (window.innerWidth > 1176) {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".introduction-columns",
        start: "top center",
        end: "bottom center",
        scrub: 2,
      },
    });

    for (let i = 1; i <= 4; i++) {
      tl2
        .to("#introduction-column-" + i, { scale: 1.1, duration: 2 })
        .to("#introduction-column-" + i, { scale: 1.0, duration: 2 });
    }
  }

  gsap.from("#image-section-text-h2", {
    y: -35,
    scrollTrigger: {
      trigger: ".image-section-text-column",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
    duration: 1.5,
  });

  gsap.from("#grid-section-h2", {
    y: -35,
    scrollTrigger: {
      trigger: ".grid-section",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
    duration: 1.5,
  });
});
