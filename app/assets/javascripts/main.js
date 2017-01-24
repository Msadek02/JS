$(document).ready(function() {
    $('.pushme').click(function() {
      $('#menu').slideToggle("fast");
    });

    $(".firstname input").focus(function(){
      $('.lastname').show();
    });

    $( "#form-test" ).submit(function( event ) {
     // event.preventDefault();

      var firstname = $( ".firstname input" ).val();
      var lastname = $( ".lastname input" ).val();

      if (firstname === '' && lastname === '') {
        alert('first name and last name cant be blank');
        return false;
      }

      if (firstname === '') {
        alert('first name cant be blank');
        return false;
      }

      if (lastname === '') {
        alert('last name cant be blank');
        return false;
      }
    });
});