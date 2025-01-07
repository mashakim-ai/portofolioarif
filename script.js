function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function searchGallery(containerId, inputId) {
  const input = document.getElementById(inputId).value.toLowerCase();
  const container = document.getElementById(containerId);
  const items = container.getElementsByClassName("gallery-item");

  for (let i = 0; i < items.length; i++) {
    const itemName = items[i].getAttribute("data-name").toLowerCase();
    if (itemName.includes(input)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
