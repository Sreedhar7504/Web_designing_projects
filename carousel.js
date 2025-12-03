// const carouselInner = document.querySelector('.carousel-inner');
// const items = document.querySelectorAll('.carousel-item');
// const prevBtn = document.querySelector('.carousel-nav.prev');
// const nextBtn = document.querySelector('.carousel-nav.next');

// let currentIndex = 0;

// function updateCarousel() {
//   const offset = -currentIndex * 100;
//   carousel
// }


document.addEventListener('DOMContentLoaded', () => {
  const seatMapEl = document.getElementById('seatMap');
  const selectedSeatsEl = document.getElementById('selectedSeats');
  const confirmBtn = document.getElementById('confirmBtn');

  // Configuration
  const rows = 10;
  const cols = ['A','B','C','D','E','F'];
  const occupiedSeats = ['1A','2B','2C','5D','7E','10F']; // example

  let selectedSeats = [];

  // Build seat grid
  for (let r = 1; r <= rows; r++) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('row');

    const label = document.createElement('div');
    label.classList.add('row-label');
    label.textContent = r;
    rowEl.appendChild(label);

    cols.forEach(col => {
      const seatId = `${r}${col}`;
      const seatEl = document.createElement('div');
      seatEl.classList.add('seat');
      seatEl.dataset.seat = seatId;

      // mark occupied or available
      if (occupiedSeats.includes(seatId)) {
        seatEl.classList.add('occupied');
      } else {
        seatEl.classList.add('available');
      }

      rowEl.appendChild(seatEl);
    });

    seatMapEl.appendChild(rowEl);
  }

  // Handle clicks
  seatMapEl.addEventListener('click', e => {
    const el = e.target;
    if (!el.classList.contains('seat') || el.classList.contains('occupied')) return;

    const seatId = el.dataset.seat;
    if (el.classList.contains('selected')) {
      // unselect
      el.classList.remove('selected');
      selectedSeats = selectedSeats.filter(s => s !== seatId);
    } else {
      // select
      el.classList.add('selected');
      selectedSeats.push(seatId);
    }
    updateSelectionDisplay();
  });

  // Update text of selected seats
  function updateSelectionDisplay() {
    if (selectedSeats.length) {
      selectedSeatsEl.textContent = selectedSeats.join(', ');
    } else {
      selectedSeatsEl.textContent = 'None';
    }
  }

  // Confirm button
  confirmBtn.addEventListener('click', () => {
    if (!selectedSeats.length) {
      alert('Please select at least one seat.');
    } else {
      alert('You have confirmed seats: ' + selectedSeats.join(', '));
      // here you could send data to your server...
    }
  });
});