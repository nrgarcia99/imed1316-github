// A $( document ).ready() block.
$( document ).ready(function() {
  //console.log( "nick garcia testing" );
  //alert('test');
  
  $(document).on('change', '#t-shirt', chkTshirt);
  
  //begin chkTshirt Function
  function chkTshirt(){
    var tshirt = $("#t-shirt").val();
   //alert(tshirt);
    
    
    //begin if tshirt
    if (tshirt == 'CUSTOM') {
      //alert("works");
      $('#CUSTOM').removeAttr('disabled'); //removed disabled
      $('#CUSTOM').attr('required', true);
    } // end if tshirt
    else {
      $('#CUSTOM').attr('disabled', true); //disabled again
      $('#CUSTOM').val(''); //set value to empty
      $('#CUSTOM').removeAttr('required'); //removed required
    }//end else
  }// end chkTshirt function
  
});