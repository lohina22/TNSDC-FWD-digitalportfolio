function toggleTheme() {
  const body = document.body;
  if (body.style.background === 'black') {
    body.style.background = '#fff8f0';
    body.style.color = '#4b2e2e';
  } else {
    body.style.background = 'black';
    body.style.color = '#f8d7da';
  }
}

// Simple carousel rotation
let index = 0;
const testimonials = document.querySelectorAll('#carousel p');
setInterval(() => {
  testimonials.forEach((t, i) => t.style.display = i === index ? 'block' : 'none');
  index = (index + 1) % testimonials.length;
}, 3000);
function bookNow() {
  alert("Thanks for choosing A&L We'll contact you shortly.");
}
