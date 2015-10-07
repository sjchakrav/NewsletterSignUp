$(function(){
  var form = $('#ajax-contact');

  form.on("submit", function(e){
    e.preventDefault();
    formData = form.serialize();

    var proccedEmail = true;


    var email = $("input[name='email']");



    var errorEmail = '<i class="fa fa-exclamation"><span>Enter valid email</span></i>';




    if(!email.val() == "" && email.val().indexOf(".com") >= 0 ){
      proccedEmail = true;
      email.siblings('.fa').remove();
    }else {
      email.parent().append(errorEmail);
      proccedEmail = false;
    }


    if(proccedEmail == true){
      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
      })
      .done(function(response){
        $('body').append('<div class="alert alert-success alert-dismissible fade in" role="alert">\
                    <strong>You have successfuly contact us.</strong>\
                  </div>');
        $('.alert').fadeOut(1000);
        setTimeout(function(){
          $('.alert').remove();
        },2000);
        })
      .fail(function(data){
        alert("ERROR");
      });
    }
  });
});

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
// function getData() {
// $.ajax({
//     type: 'POST',
//     url: 'https://protected-lake-8698.herokuapp.com/api/subscribe',
//     data: data,
//     dataType: 'json'
//     });
//     // url: $(form).attr('action'),
//     // data: formData
//   }