// JavaScript to handle expanding/collapsing cards and QR code functionality
document.addEventListener("DOMContentLoaded", function () {
  const cardHeaders = document.querySelectorAll(".card-header");
  const qrCodeImage = document.getElementById("qrCodeImage");
  const qrButton = document.getElementById("openQrButton");
  const qrModal = document.getElementById("qrModal");
  const closeModal = document.getElementById("closeModal");
  
  // Details drawer elements
  const drawerButton = document.getElementById("drawerButton");
  const detailsContent = document.getElementById("detailsContent");

  // Set up dynamic footer height CSS variable to avoid footer overlapping content
  function setFooterHeightVar() {
    const footer = document.querySelector(".footer");
    if (!footer) return;
    const height = footer.offsetHeight;
    document.documentElement.style.setProperty("--footer-height", height + "px");
  }

  // update on load and when viewport changes
  window.addEventListener("load", setFooterHeightVar);
  window.addEventListener("resize", setFooterHeightVar);
  window.addEventListener("orientationchange", setFooterHeightVar);
  // also run once now
  setFooterHeightVar();

  // QR Code Modal functionality
  function openQrModal() {
    qrModal.style.display = "flex";
  }

  function closeQrModal() {
    qrModal.style.display = "none";
  }

  // Add event listeners for QR code functionality
  qrCodeImage.addEventListener("click", openQrModal);
  qrButton.addEventListener("click", openQrModal);
  closeModal.addEventListener("click", closeQrModal);

  // Handle details drawer toggle
  if (drawerButton && detailsContent) {
    // initialize drawer to closed state
    const drawerArrow = drawerButton.querySelector(".drawer-btn");
    detailsContent.style.display = "none";
    if (drawerArrow) drawerArrow.style.transform = "rotate(90deg)";

    drawerButton.addEventListener("click", function () {
      const arrowIcon = this.querySelector(".drawer-btn");
      if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
        detailsContent.style.display = "block";
        if (arrowIcon) arrowIcon.style.transform = "rotate(270deg)"; // open -> 0deg
        this.classList.add("expanded");
      } else {
        detailsContent.style.display = "none";
        if (arrowIcon) arrowIcon.style.transform = "rotate(90deg)"; // closed -> 90deg
        this.classList.remove("expanded");
      }
    });
  }

  // Close modal when clicking outside the content
  qrModal.addEventListener("click", function (e) {
    if (e.target === qrModal) {
      closeQrModal();
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeQrModal();
    }
  });

  // Handle expanding/collapsing card content
  cardHeaders.forEach((header) => {
    const content = header.nextElementSibling;
    const expandIcon = header.querySelector(".expand-icon");

    // initialize collapsed state: icon pointing right (90deg)
    if (content) content.style.display = "none";
    if (expandIcon) expandIcon.style.transform = "rotate(90deg)";

    header.addEventListener("click", function () {
      if (!content) return;
      if (content.style.display === "none") {
        content.style.display = "block";
        if (expandIcon) expandIcon.style.transform = "rotate(0deg)"; // open -> 0deg
      } else {
        content.style.display = "none";
        if (expandIcon) expandIcon.style.transform = "rotate(90deg)"; // closed -> 90deg
      }
    });
  });



  // Update time every second
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeElement = document.querySelector(".time span");
    if (timeElement) {
      timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setTimeout(updateTime, 1000);
  }

  // Initialize time update
  updateTime();
});



