const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  window.addEventListener("load", eventListerner);
  window.addEventListener("scroll", eventListerner);

  function eventListerner() {
    let windowHeight = window.innerHeight;
    let sectionRectTop = section.getBoundingClientRect().top;

    //console.log("Window Height: " + windowHeight);
    //console.log("Section RectTop: " + sectionRectTop);

    if (sectionRectTop < windowHeight) {
      section.classList.add("active");
    }
  }

  window.addEventListener("scroll", () => {
    let reveals = section.querySelectorAll(".reveal");

    reveals.forEach((reveal, index) => {
      if (section.classList.contains("active")) {
        const delay = 600;
      }
    });
  });
});
