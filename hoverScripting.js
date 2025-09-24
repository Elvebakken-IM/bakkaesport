let onMobile = isTouchOrMobile();

const A = document.getElementById("DEIA");
const B = document.getElementById("MHU");

if (!onMobile) {
A.addEventListener("mouseenter", () => B.style.opacity = "0.3");
A.addEventListener("mouseleave", () => B.style.opacity = "1");

B.addEventListener("mouseenter", () => A.style.opacity = "0.3");
B.addEventListener("mouseleave", () => A.style.opacity = "1");
}


function isTouchOrMobile() {
  // Touch detection
    const hasTouch = ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        (navigator.msMaxTouchPoints > 0);

  // Screen width detection
    const isSmallScreen = window.innerWidth <= 768;
    return hasTouch || isSmallScreen;
}