$(document).ready(function () {
  // Initialize AOS library
  AOS.init({
    duration: 800,
    once: true
  });

  // Search Destinations
  $('#searchInput').on('keyup', function () {
    const query = $(this).val().toLowerCase();
    $('.destination-card').each(function () {
      const name = $(this).data('name').toLowerCase();
      $(this).toggle(name.indexOf(query) !== -1);
    });
  });

  // Open Booking Model
  $('.book-btn').on('click', function () {
    const dest = $(this).data('dest');
    $('#destInput').val(dest);
    $('#bookingModal').modal('show');
  });

  // Handle Booking Submission
  $('#bookingForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#nameInput').val();
    const email = $('#emailInput').val();
    const date = $('#dateInput').val();
    const people = $('#peopleInput').val();
    const dest = $('#destInput').val();

    // Demo alert
    alert(
      `Thank you, ${name}! Your trip to ${dest} on ${date} for ${people} ${
        people > 1 ? 'people' : 'person'
      } is confirmed. Details sent to ${email}.`
    );

    $('#bookingModel').modal('hide');
    this.reset();
  });
});