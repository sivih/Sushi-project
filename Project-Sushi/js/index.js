console.log("Hi")
// Reservation Js
function validateForm() {
    var fullname = document.forms["reservationForm"]["name"].value;
    var phone = document.forms["reservationForm"]["phone"].value;
    var date = document.forms["reservationForm"]["date"].value;
    var time = document.forms["reservationForm"]["time"].value;
    var guests = document.forms["reservationForm"]["guests"].value;
    
    if (fullname == "" ||  phone == "" || date == "" || time == "" || guests == "") {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  }

  // Fund Rs



  // //  Contact Js

  //       $('.form-group input, .form-group textarea').on("focus", function(){
  //           $(this).addClass('focus');
            
  //       });
  //       $(".form-group input, .form-group textarea").on("blur", function(){
  //           if($(this).val() == "")
  //               $(this).removeClass("focus"); 
  //       });
     
  


