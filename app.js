var formSubmitted = false,
valid = false;

var email;


$('.msg').hide();

$(document).ready(function() {
  // Regex for Validation
  $('form input[name="email"]').on('keyup keypress blur change', function () {
    email = $(this).val();
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(email)) {
      $('#msg').hide();
      valid = true;
      $('#form button').prop('disabled', false);
    } else {
      $('#msg').text('Invalid email address');
      $('#msg').show();
      $('#form button').prop('disabled', true);
      valid = false;
    }
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
      //add loading GIF here

      if(valid && !formSubmitted) {
          console.log(email);
        formSubmitted = true;
        $.post('https://protected-lake-8698.herokuapp.com/api/subscribe', email).then(function(data) {
          formSubmitted = false;
          console.log(data);
          $('#div1 h2').text(data.title)
        }).fail(function() {
          console.log('error!');
        });
      }
    });
});





