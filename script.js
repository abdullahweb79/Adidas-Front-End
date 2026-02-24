
document.getElementById("closeTop").addEventListener("click", function() {
    document.getElementById("topBar").style.display = "none";
});

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}
document.getElementById("closeTop").addEventListener("click", function() {
    document.getElementById("topBar").style.display = "none";
});
 document.addEventListener("DOMContentLoaded", function () {
  
  const videoModal = document.getElementById("videoModal");
  const youtubeFrame = document.getElementById("youtubeFrame");
  const closeModal = document.getElementById("closeModal");

  const heroSlides = [
    {
      heading: "GET READY FOR NEW ADIDAS BANDS",
      paragraph: "Adidas tracks all begin with a starting gate and end with a finish line. Discover the latest gear designed to elevate your performance on and off the track.",
      thumbnail: "./Slicing/video-thumbnail-img.png",
      videoURL: "https://www.youtube.com/embed/fFnXvKFcrIY"
    },
    {
      heading: "SPRING COLLECTION IS HERE",
      paragraph: "Explore the tracks in a whole new way with our vibrant spring collection. From breathable fabrics to bold designs, it's time to refresh your athletic wardrobe.",
      thumbnail: "./Slicing/video-thumbnail-img.png",
      videoURL: "https://www.youtube.com/embed/EqlxnbGSlE4"
    },
    {
      heading: "SPEED MEETS STYLE",
      paragraph: "Our latest shoes combine unmatched performance and modern elegance. Run faster, look sharper, and feel confident with every step you take.",
      thumbnail: "./Slicing/video-thumbnail-img.png",
      videoURL: "https://www.youtube.com/embed/864B4rzoPog"
    }
  ];

  let currentSlide = 0;

  const headingEl = document.getElementById("heroHeading");
  const paragraphEl = document.getElementById("heroParagraph");
  const thumbnailEl = document.getElementById("heroThumbnail");
  const playIcon = document.getElementById("playIcon");
  const slideIndicatorContainer = document.getElementById("slideIndicator");


  heroSlides.forEach((_, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    if (index === 0) bar.classList.add("active");
    slideIndicatorContainer.appendChild(bar);
  });

  const indicatorBars = slideIndicatorContainer.querySelectorAll(".bar");

  function updateSlide(index) {
    const slide = heroSlides[index];
    headingEl.textContent = slide.heading;
    paragraphEl.textContent = slide.paragraph;
    thumbnailEl.src = slide.thumbnail;

    playIcon.onclick = () => {
      youtubeFrame.src = slide.videoURL;
      videoModal.style.display = "flex";
    };

    indicatorBars.forEach((bar, i) => {
      bar.classList.toggle("active", i === index);
    });
  }

  updateSlide(currentSlide);

  document.getElementById("nextBg").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateSlide(currentSlide);
  });

  document.getElementById("prevBg").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    updateSlide(currentSlide);
  });

  closeModal?.addEventListener("click", () => {
    youtubeFrame.src = "";
    videoModal.style.display = "none";
  });

  videoModal?.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      youtubeFrame.src = "";
      videoModal.style.display = "none";
    }
  });

});
  const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const dashContainer = document.getElementById("dashes");

const slides = slider.children;
const totalSlides = slides.length;

let index = 0;

for (let i = 0; i < totalSlides; i++) {
    const dash = document.createElement("span");
    dash.classList.add("dash");
    if (i === 0) dash.classList.add("active");
    dashContainer.appendChild(dash);
}

const dashes = document.querySelectorAll(".dash");

function getSlideWidth() {
    return slides[0].offsetWidth + 20;
}

function updateSlider() {
    slider.style.transform = `translateX(-${index * getSlideWidth()}px)`;

    dashes.forEach(d => d.classList.remove("active"));
    dashes[index].classList.add("active");
}

nextBtn.onclick = () => {
    if (index < totalSlides - 1) {
        index++;
        updateSlider();
    }
};

prevBtn.onclick = () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
};

