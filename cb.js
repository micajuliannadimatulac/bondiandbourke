window.onload = function() {
  var forms = document.getElementsByTagName("form");
  
  if (forms.length > 0) {
      var bookingForm = forms[0];
      bookingForm.onsubmit = function(event) {
          event.preventDefault();
          alert("Thank you for your booking! We will contact you soon to confirm.");
          bookingForm.reset();
      };
  }
  
  if (forms.length > 1) {
      var messageForm = forms[1];
      messageForm.onsubmit = function(event) {
          event.preventDefault();
          alert("Thank you for your message! We will get back to you soon.");
          messageForm.reset();
      };
  }

  // Scroll-to-more functionality
  const scrollMoreElements = document.querySelectorAll('.scroll-more');
  scrollMoreElements.forEach(element => {
      element.addEventListener('click', function(e) {
          e.preventDefault();
          const bgContainer = this.closest('.background-container') || this.closest('.service-background-container');
          const nextElement = bgContainer.nextElementSibling;
          
          if (nextElement) {
              nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
              window.scrollBy({
                  top: window.innerHeight,
                  behavior: 'smooth'
              });
          }
      });
  });
};

  