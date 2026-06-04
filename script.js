// Dark Mode
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    btn.innerText =
        document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
});

// Scroll Animation
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));