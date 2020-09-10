console.log(' Email working');

let mode = localStorage.getItem('theme');

$(document).ready(function() {
    $('#submit-btn').on('click',function(event) {

        var name = $('input[name=name]').val();
        var subject = $('input[name=subject]').val();
        var email = $('input[name=email]').val();
        var message = $('textarea[name=message]').val();
        
        //Validate email 
        if(!validateEmail(email)){
            event.preventDefault();

            if(mode == 'red'){
                $('#email-input').css ("color","blue");
                if($('.validation') == null){
                    $("#email-input").parent().after("<div class='validation' style='color:blue;margin-bottom: 20px;'>Please enter valid email address</div>");
                }
            }
            else{
                $('#email-input').css ("color","#ff0033");
                if($('.validation') == null){
                    $("#email-input").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please enter valid email address</div>");
            
                }
            }
        }
        
    })

    $('#email-input').on('input', function(){ 
        console.log('Im in here') ;
        mode = localStorage.getItem('theme');   
        if(mode !== 'light')$('#email-input').css ("color","white");
        else $('#email-input').css ("color","#4b5156");
        if($('.validation') != null)
            $(".validation").remove();
    })

})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
