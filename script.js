const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Built a responsive portfolio site to showcase projects, skills, and contact information."
  },
  {
    title: "To-Do List App",
    description: "Created a task management app using JavaScript and jQuery with add, delete, and complete functions."
  },
  {
    title: "Student Registration Form",
    description: "Designed a registration form with validation using HTML, CSS, and JavaScript."
  }
];

const projectsSection = document.getElementById("projects-section");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.description;

  card.appendChild(title);
  card.appendChild(desc);
  projectsSection.appendChild(card);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
});

document.getElementById("skillSearch").addEventListener("keyup", function () {
  const searchValue = this.value.toLowerCase();
  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
    const skillText = skill.textContent.toLowerCase();
    if (skillText.includes(searchValue)) {
      skill.style.display = "inline-block";
    } else {
      skill.style.display = "none";
    }
  });
});

$(document).ready(function () {
  $("#toggleProjectsBtn").on("click", function () {
    $("#projects-section").slideToggle();

    if ($(this).text() === "Show Projects") {
      $(this).text("Hide Projects");
    } else {
      $(this).text("Show Projects");
    }
  });

  $(".skill").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".section").hide().each(function (index) {
    $(this).delay(200 * index).fadeIn(700);
  });
});