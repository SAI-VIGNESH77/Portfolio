/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /*==================== REMOVE MENU MOBILE ====================*/
  
  const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

  
  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // Adjust this offset value as needed for your header
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
  });
  
  sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
  sr.reveal(
    ".home__img, .about__subtitle, .about__text, .skills__img",
    { delay: 400 }
  );
  sr.reveal(".home__social-icon", { interval: 200 });
  sr.reveal(
    ".skills__data, .project__img,.certification__img, .contact__input",
    { interval: 200 }
  );
  
  /*==================== EMAILJS + TOAST + SPINNER ====================*/
  (function () {
    emailjs.init("TbLVu_1DHIm2j2XGl");
  })();
  
  function showToast(message, success = true) {
    const toast = document.getElementById("toast");
    toast.style.background = success ? "#28a745" : "#dc3545";
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }
  
  function toggleSpinner(show) {
    const spinner = document.getElementById("spinner");
    spinner.style.display = show ? "flex" : "none";
  }
  
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    toggleSpinner(true);
  
    emailjs
      .send("service_um2t7vb", "template_6hcxifa", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      })
      .then(
        function () {
          showToast("✅ Message sent successfully!", true);
          form.reset();
          toggleSpinner(false);
        },
        function (error) {
          showToast("❌ Failed to send message.", false);
          console.error("EmailJS Error:", error);
          toggleSpinner(false);
        }
      );
  });
  
  /*==================== TYPEWRITER EFFECT ====================*/
  document.addEventListener("DOMContentLoaded", () => {
    const typedText = document.querySelector(".typing-text");
    const phrases = [
      " Software Developer",
      " Web Developer"
    ];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
  
    function typeEffect() {
      const fullText = phrases[currentPhrase];
      if (!isDeleting) {
        currentChar++;
        if (currentChar <= fullText.length) {
          typedText.innerHTML = fullText.substring(0, currentChar).replace(/(.)/g, '<span class="glow">$1</span>');
        } else {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
          return;
        }
      } else {
        currentChar--;
        if (currentChar >= 0) {
          typedText.innerHTML = fullText.substring(0, currentChar).replace(/(.)/g, '<span class="glow">$1</span>');
        } else {
          isDeleting = false;
          currentPhrase = (currentPhrase + 1) % phrases.length;
        }
      }
      setTimeout(typeEffect, isDeleting ? 60 : 100);
    }
  
    typeEffect();
  });
  
