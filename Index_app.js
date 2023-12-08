const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
        const percentOfScreenHeightScroll = htmlElement.scrollTop / htmlElement.clientHeight
    console.log(Math.min (percentOfScreenHeightScroll * 100 , 100))
    htmlElement.style.setProperty("--scroll", Math.min (percentOfScreenHeightScroll * 100 , 100))
}
setScrollVar()