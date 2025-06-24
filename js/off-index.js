// index.js
document.addEventListener("DOMContentLoaded", () => {
  // 1) Espandi/contrae le card
  document.querySelectorAll(".card-header").forEach(header => {
    header.addEventListener("click", () => {
      const content    = header.nextElementSibling;
      const expandIcon = header.querySelector(".expand-icon");
      
      const isHidden = getComputedStyle(content).display === "none";
      content.style.display = isHidden ? "block" : "none";
      expandIcon.style.transform = isHidden 
        ? "rotate(90deg)" 
        : "rotate(0deg)";
    });
  });

  // 2) Aggiorna l’orologio ogni secondo
  const timeElement = document.querySelector(".time .current-time");
  function updateTime() {
    const now     = new Date();
    const hh      = now.getHours().toString().padStart(2, "0");
    const mm      = now.getMinutes().toString().padStart(2, "0");
    const ss      = now.getSeconds().toString().padStart(2, "0");
    
    if (timeElement) {
      timeElement.textContent = `${hh}:${mm}:${ss}`;
    }
    setTimeout(updateTime, 1000);
  }
  updateTime();
});
