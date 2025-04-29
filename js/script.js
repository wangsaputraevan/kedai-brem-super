const img1 = document.querySelector('#hero .hero-container .hero-content .hero-img-wrapper .current');
const img2 = document.querySelector('#hero .hero-container .hero-content .hero-img-wrapper .next');

const listImage = [
    "src/hero-product/3.png",
    "src/hero-product/4.png",
    "src/hero-product/5.png",
    "src/hero-product/6.png"
];

let currentIndex = 0;
let isImg1Active = true;

function changeHeroImage() {
    const nextIndex = (currentIndex + 1) % listImage.length;
    const nextImage = listImage[nextIndex];

    if (isImg1Active) {
        img2.src = nextImage;
        img2.classList.add('active');
        img1.classList.remove('active');
    } else {
        img1.src = nextImage;
        img1.classList.add('active');
        img2.classList.remove('active');
    }

    isImg1Active = !isImg1Active;
    currentIndex = nextIndex;
}

setInterval(changeHeroImage, 3000);
