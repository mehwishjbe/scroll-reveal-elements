const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  window.addEventListener("load", eventListerner);
  window.addEventListener("scroll", eventListerner);

  function eventListerner() {
    let windowHeight = window.innerHeight;
    let sectionRectTop = section.getBoundingClientRect().top;

    //console.log("Window Height: " + windowHeight);
    //console.log("Section RectTop: " + sectionRectTop);
  }
});
