window.addEventListener("message", (event) => {
    if (event.data === "formSubmitted") {
        window.location.href = "jegkodetselv.html"; 
    }
});