$(document).ready(function(){
  $("#mybirthdate").mask("99/99/9999");
})

function getAkanName(){
  var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var maleAkanNames=["kwasi","Kwadwo","kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  var myBirthday=document.getElementById("mybirthdate").value;
  var myGender=document.getElementByName("gender");
  var dayOfTheWeek=dateOfBirth.getDay();
  if(myBirthday === ""){
    document.getElementById('message');
  }
    else {
      for(var i=0;i<myGender.length;i++){
        if (myGender[i].checked){
          document.getElementById('message').innerHTML="<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
        }
        else{
        document.getElementById('message').innerHTML= "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
          }
        break;
      }
      else{
        document.getElementById('message').innerHTMLL= "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Oh snap!</strong> You Should Select a Gender Too Determine Your Akan Name!</div>";
      }
    }
}
function clearAkanMessage(){
  document.getElementById('message').innerHTML="";
}
