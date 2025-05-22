// Page loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Mode toggle
const modeToggle = document.getElementById("mode-toggle");
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Project Data (2 per kategori, bisa ditambah lagi)
const projects = {
  design: [
    {
      title: "Project 1",
      iframe: '<iframe src="https://drive.google.com/file/d/1RwWgOhoyYTcdZ4yOK2S4efQ-zfdbHEF_/preview" allow="autoplay"></iframe>'
    },
    {
      title: "Project 2",
      iframe: '<iframe src="https://drive.google.com/file/d/1fDzpY9T_JhQ2o4GBBUaYMtPzLGeRMtXv/preview" allow="autoplay"></iframe>'
    },
    {
      title: "Project 3",
      iframe: '<iframe src="https://drive.google.com/file/d/18WukDe7Ohy0VdTYiyLeaUmyd4cmcO0Ti/preview" allow="autoplay"></iframe>'
    },
    {
      title: "Project 4",
      iframe: '<iframe src="https://drive.google.com/file/d/14bKZTSiZJu6c__Vgljha3SnjVe0rxONG/preview" allow="autoplay"></iframe>'
    }
  ],
  youtube: [
    {
      title: "Video 1",
      iframe: '<iframe src="https://www.youtube.com/embed/lVrdx0sXNZI?si=WCNYj2E5pVHea7Qn" title="Video 1" allowfullscreen></iframe>'
    },
    {
      title: "Video 2",
      iframe: '<iframe src="https://www.youtube.com/embed/azqgAJXeLak?si=v0PSsZ_Zclo9mIqh" title="Video 2" allowfullscreen></iframe>'
    }
  ],
 cv: [
  {
    title: "CV Syifa Nur Insani",
    iframe: '<iframe src="assets/docs/CV.pdf" width="100%" height="500px"></iframe>'
  }
]

};

// Render projects
function renderProjects(type) {
  const container = document.getElementById("portfolio-items");
  if (!container) return;
  container.innerHTML = "";

  if (projects[type]) {
    projects[type].forEach(project => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h4 style="margin-bottom: 0.5rem;">${project.title}</h4>
        ${project.iframe}
      `;
      container.appendChild(div);
    });
  } else {
    container.innerHTML = "<p>Tidak ada proyek untuk kategori ini.</p>";
  }
}

// Event listener untuk tombol filter
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-filter");
    renderProjects(type);
  });
});
