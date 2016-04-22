  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
 });

      $('.slider').slider({full_width: true});

    $('.scrollspy').scrollSpy();
    
    $('.materialboxed').materialbox();


    $('.modal-trigger').leanModal();


    $("#send").click(function(){
        var name = $("#name").val();
        var lastname = $("#last_name").val();
        var feedback = $("#feedback").val();
        if(name === '' || lastname === '' || feedback === '')
        {
        alert('Заполните все поля!');
        return false;
        }
        $(".feedbacks").append("<li class='collection-item avatar'><img src='noname.png' alt='' class='circle'><span class='title'></span><span class='close'>x</span><span class='like'><i class='material-icons'>thumb_up</i></span><p></p></li>");
        $(".title:last").text(name+' '+lastname);
        $("p:last").text('«'+feedback+'»');
        $("#name").val('');
        $("#last_name").val('');
        $("#feedback").val('');
    });
   

$(document).ready(function () {
    $('html').on('click','.close', function () {                               
        $(this).parent().remove();    
    });
    
     $('html').on('click','.like', function () {                               
         if ($(this).css('color') == 'rgb(170, 170, 170)'){
        $(this).css('color','teal');}
        else if ($(this).css('color') == 'rgb(0, 128, 128)'){
        $(this).css('color','#aaa');}    
    });
});

