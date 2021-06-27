// added functionality to create button
  var modal2 = document.getElementById("myModal-create");
  var btn2 = document.getElementById("btn-create");
  var span2 = document.getElementsByClassName("close")[2];
  btn2.onclick = function () {
    modal2.style.display = "block";
  }
  span2.onclick = function () {
    modal2.style.display = "none";
  }