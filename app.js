$(document).ready(function() {
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

  $("button").click(function() {

    $('form').on('submit', function(e) {
      e.preventDefault();
      // $.ajax({
      //     type: 'POST',
      //     url: 'https://protected-lake-8698.herokuapp.com/api/subscribe',
      //     data: data,
      //     dataType: 'json'
      //     });
      //     // url: $(form).attr('action'),
      //     // data: formData
      //   }

      $.post('https://protected-lake-8698.herokuapp.com/api/subscribe').then(function(data) {
        // console.log(data);
        $('#div1 h2').text(data.title)
      }).fail(function() {
        console.log('oops');
      });
    });
  })

});





