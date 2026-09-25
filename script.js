function openStory() {
  const story = document.getElementById("story");
  story.classList.remove("hidden");
  setTimeout(() => {
    story.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

function showFinal() {
  document.getElementById("final-message").classList.remove("hidden");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
