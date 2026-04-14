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
};

  