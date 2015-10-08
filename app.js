$(document).ready(function() {
  // Regex for Validation
  var formSubmitted = false;
  var valid = false;
  var email;

  $('.msg').hide();
  $('#loading-spinner').hide();

  $('form input[name="email"]').on('input', function () {
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
        $('#loading-spinner').show();
        $('form button').hide();
          console.log(email);
        formSubmitted = true;
        $.post('https://protected-lake-8698.herokuapp.com/api/subscribe', {email:email}).then(function(data) {
          formSubmitted = false;
          console.log(data);
        }).fail(function(error) {
          console.log('error!', JSON.parse(error.responseText).message);
          $('#msg').text(JSON.parse(error.responseText).message);
          $('#msg').show();
        })
        .always(function() {
          $('#loading-spinner').hide();
          $('form button').show();
        });
      }
    });
});





