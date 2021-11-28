$(document).ready(function(){
    $("#submit-form").validate({
 
          rules:{
           name:{
                 required:true,
                 minlength:3,
                
                 },
                 email:{
                   required:true,
                   email
                   },
                  PhoneNumber:{
                    required:true,
                    number:true,
                    minlength:10
 
                  }, 
                 
                  message:{ 
                   required:true,
                   minlength:40
           }  
          }
          })
       })
 
       $('#submitbutton').on('click', function() {
         $("#submit-form").valid();
     });