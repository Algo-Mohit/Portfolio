var typed = new Typed('#element', {
      strings: ['Frontend Engineer','Backend Engineer','C++ Developer','SQL Expert'],
      typeSpeed: 100,
      backspeed: 100,
      loop: true 
    });


const menuToggle = document.getElementById('menu-toggle');
const leftSlider = document.getElementById('leftslider');

menuToggle.addEventListener('click', function() {
  leftSlider.classList.toggle('active');
});

   (function () {
        emailjs.init("mG5m2L-48Q860Ywqk"); // your public key
      })();

      document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          emailjs
            .send("service_m6y8ft6", "template_e6vl98q", {
              name: document.getElementById("myname").value,
              email: document.getElementById("email").value,
              subject: document.getElementById("sub").value,
              message: document.getElementById("Message").value,
            })
            .then(
              function (response) {
                alert("✅ Message sent successfully!");
              },
              function (error) {
                alert("❌ Failed to send message. Please try again.");
                console.log(error);
              }
            );
        });

