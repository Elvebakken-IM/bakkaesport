const A = document.getElementById("DEIA");
const B = document.getElementById("MHU");

A.addEventListener("mouseenter", () => B.style.opacity = "0.3");
A.addEventListener("mouseleave", () => B.style.opacity = "1");

B.addEventListener("mouseenter", () => A.style.opacity = "0.3");
B.addEventListener("mouseleave", () => A.style.opacity = "1");