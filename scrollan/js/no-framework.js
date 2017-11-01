document.addEventListener('DOMContentLoaded', function(event) {
  var headings = document
      .querySelector('#blog-content')
      .querySelectorAll('h1,h2,h3,h4,h5');

  var navbarHeight = document
      .querySelector('#navbar-container')
      .getBoundingClientRect()
      .height;

  var scrollan = new Scrollan(
    document.querySelector('#scrollan-output'),
    'scrollan',
    headings,
    navbarHeight
  );
});
