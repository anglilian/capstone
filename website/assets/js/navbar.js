$('.navbar-brand').click(function() {
  $('.navbar-toggle').attr('aria-expanded', false);
  $('.navbar-toggle').addClass('collapsed');
  $('.navbar-collapse').attr('aria-expanded', false);
  $('.navbar-collapse').addClass('collapse');
  $('.navbar-collapse').removeClass('in');
});


