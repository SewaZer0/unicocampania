// JavaScript to handle expanding/collapsing cards and QR code functionality
document.addEventListener("DOMContentLoaded", function () {
  const cardHeaders = document.querySelectorAll(".card-header");
  const qrCodeImage = document.getElementById("qrCodeImage");
  const qrButton = document.getElementById("openQrButton");
  const qrModal = document.getElementById("qrModal");
  const closeModal = document.getElementById("closeModal");

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
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const expandIcon = this.querySelector(".expand-icon");

      if (content.style.display === "none") {
        content.style.display = "block";
        expandIcon.style.transform = "rotate(90deg)";
      } else {
        content.style.display = "none";
        expandIcon.style.transform = "rotate(0deg)";
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
