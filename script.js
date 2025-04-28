const elementImg = document.querySelector(".hero-content img");
const listImage = ["src/hero-product/3.png", "src/hero-product/4.png", "src/hero-product/5.png", "src/hero-product/3.png"];
let i = 0
function gantiGbr() {
  elementImg.src = listImage[i];
  i = (i + 1) % listImage.length;
}
setInterval(gantiGbr, 5000)