// Regex for Validation
$('form input[name="email"]').blur(function () {
    var email = $(this).val();
    data = {email}
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (re.test(email)) {
        $('.msg').hide();
        $('.success').show();
        $('#buttonSubmit').append('background-color', 'blue');
    } else {
    $('.msg').hide();
    $('.error').show();
    }
});

// Submit the form using AJAX.
function getData() {
$.ajax({
    type: 'POST',
    url: 'https://protected-lake-8698.herokuapp.com/api/subscribe',
    data: data,
    dataType: 'json'
    });
    // url: $(form).attr('action'),
    // data: formData
  }