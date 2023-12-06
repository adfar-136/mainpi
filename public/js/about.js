
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const header = document.querySelector("header"); 
    const colors = ["#ffffff","#3498db", "#e74c3c", "#2ecc71","#ffffff"]; // Different background colors for each section
    const checkpoint = 100; // Adjust this value as needed
  
    function changeSectionTheme() {
      const scrollPosition = window.scrollY;
  
      for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        console.log(sectionTop)
        if (scrollPosition >= sectionTop - checkpoint) {
          document.body.style.transition = "background-color 0.5s"; // Add transition
          document.body.style.backgroundColor = colors[i];
          header.style.transition = "background-color 0.5s"; 
          header.style.backgroundColor = colors[i];
        }
      }
    }
  
    // Initial theme based on the first section
    changeSectionTheme();
  
    // Update the theme as the user scrolls
    window.addEventListener("scroll", changeSectionTheme);
  });
  