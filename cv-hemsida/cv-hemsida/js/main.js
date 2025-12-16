// Vänta tills sidan laddats
document.addEventListener("DOMContentLoaded", function () {
  // Hämta formuläret
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // VIKTIGT: Vi kollar om formuläret finns (if-satsen skyddar mot krasch)
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stoppa sidan från att ladda om

      // Hämta värden
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Nollställ meddelande
      formMessage.style.color = "red";
      formMessage.textContent = "";

      // Enkel validering
      if (name.length < 2) {
        formMessage.textContent = "Ange ett giltigt namn (minst 2 tecken).";
        return;
      }

      if (!email.includes("@")) {
        formMessage.textContent = "Ange en giltig e-postadress.";
        return;
      }

      if (message.length < 10) {
        formMessage.textContent = "Meddelandet måste vara minst 10 tecken.";
        return;
      }

      // Om allt är OK - Visa succé (Dynamiskt ändring)
      formMessage.style.color = "green";
      formMessage.textContent = "Tack! Ditt meddelande har skickats.";

      form.reset(); // Töm formuläret
    });
  }
});
