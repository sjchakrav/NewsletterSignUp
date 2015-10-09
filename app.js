$(document).ready(function() {

 // Guard against multiple submissions
  var formSubmitted = false;
  var isValidEmail = false;
  var email;

  // Only show email validation error after user enters email
  $('.msg').hide();
  // Hide load-spinner until user presses submit
  $('#loading-spinner').hide();

  // When user enters their email, check for validity
  $('form input[name="email"]').on('input', function () {
    email = $(this).val();
    // Regex for email validation
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

    // If email is valid, enable the submit button and change the button color to blue
    // Also, hide the invalid email error message.
    if (re.test(email)) {
      $('#msg').hide();
      isValidEmail = true;
      $('#form button').prop('disabled', false);
    } else {
    // If the email is not valid, show an error message and disable submit button
    // which is defaulted as gray
      $('#msg').text('Invalid email address');
      $('#msg').show();
      $('#form button').prop('disabled', true);
      isValidEmail = false;
    }
  });

  // When the form submit is triggered,
  $('form').on('submit', function(e) {
    e.preventDefault();
      // Prevent the form from being submitted until
      // email is valid and block multiple submission
      if(isValidEmail && !formSubmitted) {
        // Show loading spinner so user knows that the request is processing
        $('#loading-spinner').show();
        // Hide the button as another guard against multiple submissions
        $('form button').hide();

        formSubmitted = true;

        // send POST request to the API with email in the data dictionary
        $.post('https://protected-lake-8698.herokuapp.com/api/subscribe', {email:email}).then(function(data) {
            // Use Toastr library to display success message to user
            toastr.success(
                data.message,
                'Thank you'
            );
            // Clear out input field
            $('.email-input').val("");
        }).fail(function(error) {
            // Use Toastr library to display error message to user
            toastr.error(
                JSON.parse(error.responseText).message,
                'Error!'
            );
        })
        .always(function() {
          // hide spinner and show submit button after response is received
          $('#loading-spinner').hide();
          $('form button').show();
          formSubmitted = false;
        });
      }
    });
});