$(document).ready(function() {
  // Regex for Validation
  $('form input[name="email"]').blur(function () {
      var email = $(this).val();
      var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
      if (re.test(email)) {
          $('.msg').hide();
          $('.success').show();
          $('.btn btn-primary').addClass("selected");
      } else {
      $('.msg').hide();
      $('.error').show();
      }
  });

    $('form').on('submit', function(e) {
      e.preventDefault();
      //add loading GIF here
      $.post('https://protected-lake-8698.herokuapp.com/api/subscribe', email).then(function(data) {
        console.log(data);
        $('#div1 h2').text(data.title)
      }).fail(function() {
        console.log('error!');
      });
    });
});





