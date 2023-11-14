const observer = new IntersectionObserver((Entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const scroll_hidden_elements = document.querySelectorAll('.hidden')
scroll_hidden_elements.forEach((el) => observer.observe(el));