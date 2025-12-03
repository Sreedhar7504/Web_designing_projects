$(document).ready(function() {
  // Initialize AOS
  AOS.init({ duration: 800, once: true });

  // Smooth scroll for navbar links
  $('.navbar-nav a').on('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      const target = this.hash;
      $('html, body').animate({ scrollTop: $(target).offset().top - 56 }, 600);
    }
  });

  // Open booking modal
  $('#bookNowBtn').on('click', function(e) {
    e.preventDefault();
    $('#bookingModal').modal('show');
  });

  // Booking form submission
  $('#bookingForm').on('submit', function(e) {
    e.preventDefault();
    const city = $('#cityName').val();
    const name = $('#userName').val();
    const email = $('#userEmail').val();
    const date = $('#travelDate').val();
    const people = $('#peopleCount').val();

    alert(
      `Thank you, ${name}! Your trip to ${city} on ${date} for ${people} ${
        people > 1 ? 'people' : 'person'
      } is confirmed. Details sent to ${email}.`
    );
    $('#bookingModal').modal('hide');
    this.reset();
  });
});