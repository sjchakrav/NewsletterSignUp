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