// added functionality to create button
var linkModal = document.getElementsByClassName("signup-link")[0].onclick = function () { //when user clicks the sign-up link 
    modal.style.display = "block";//open the sign-up model
    modal1.style.display = "none";//closes the sign-in model
  }
  var modal2 = document.getElementById("myModal-create");
  var btn2 = document.getElementById("btn-create");
  var span2 = document.getElementsByClassName("close")[2];
  btn2.onclick = function () {
    modal2.style.display = "block";
  }
  span2.onclick = function () {
    modal2.style.display = "none";
  }