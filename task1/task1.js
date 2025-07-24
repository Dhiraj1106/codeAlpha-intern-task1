let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(img) {
  currentIndex = [...images].indexOf(img);
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showImage(index) {
  if (index >= 0 && index < images.length) {
    lightboxImg.src = images[index].src;
    currentIndex = index;
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function filterImages(category) {
  images.forEach(img => {
    img.style.display = category === "all" || img.classList.contains(category)
      ? "block"
      : "none";
  });
}

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") nextImage();
    else if (e.key === "ArrowLeft") prevImage();
    else if (e.key === "Escape") closeLightbox();
  }
});
