function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("active");
}

/* PRELOADER */
window.addEventListener("load", function(){
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const form = document.getElementById("contactForm");
const spinner = document.getElementById("spinner");
const btnText = document.querySelector(".btn-text");
const successMessage = document.getElementById("form-success");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    spinner.style.display = "inline-block";
    btnText.textContent = "Sending...";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
    .then(response => {
      spinner.style.display = "none";
      btnText.textContent = "Send Message";
      form.reset();
      successMessage.style.display = "block";
    })
    .catch(error => {
      spinner.style.display = "none";
      btnText.textContent = "Send Message";
      alert("Something went wrong. Please try again.");
    });
  });
}


const verseText = "“Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.” – Joshua 1:8";

const typedElement = document.getElementById("typed-verse");

let index = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    // Typing
    typedElement.innerHTML = verseText.substring(0, index + 1);
    index++;

    if (index === verseText.length) {
      setTimeout(() => isDeleting = true, 2000); // pause before delete
    }
  } else {
    // Deleting
    typedElement.innerHTML = verseText.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 30 : 40;
  setTimeout(typeLoop, speed);
}

window.addEventListener("load", typeLoop);
