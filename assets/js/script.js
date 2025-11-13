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
