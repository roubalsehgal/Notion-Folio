window.addEventListener("scroll", () => {
    let s = document.getElementsByClassName("super-navbar")[0];
    window.scrollY > 0 ? s.classList.add("scrolled") : s.classList.remove("scrolled")
});
