const navButton = document.querySelector(".fa-bars");
const navItems = document.querySelector(".navItemsMobile");
const navLi =  document.querySelectorAll(".navItemsMobile li");

navButton.addEventListener("click", () => {
    toggleOpen();
})

navItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("closeOnClick")){
        toggleOpen();
    }
})

toggleOpen = function() {
    navItems.classList.toggle("open");
    navButton.classList.toggle("fa-times");
    navButton.classList.toggle("fa-bars");
    navButton.classList.toggle("hasBack");
}