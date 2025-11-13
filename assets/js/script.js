// ===== Admissions Form Handling =====
const admissionForm = document.getElementById("admissionForm");
const formMessage = document.getElementById("formMessage");

if (admissionForm) {
  admissionForm.addEventListener("submit", function(e) {
    e.preventDefault();
    formMessage.textContent = "✅ Application submitted successfully! We’ll contact you soon.";
    admissionForm.reset();
  });
}

// ===== Contact Form Handling =====
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    contactMessage.textContent = "✅ Message sent successfully! We’ll get back to you soon.";
    contactForm.reset();
  });
}
