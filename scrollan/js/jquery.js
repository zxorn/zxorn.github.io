$( document ).ready(function() {
  $('#scrollan-output').Scrollan({
    cssPrefix: 'scrollan',
    headings: $('#blog-content').find(':header'),
    topPadding: $('#navbar-container').height()
  });
});
