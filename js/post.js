//to display the comments on the screen
function addComments(id) {
  var addEventName = id.value + "<br>";
  var outputComm = document.getElementById("userComments");
  outputComm.value = outputComm.defaultValue;
  var outputCom = document.getElementById("addEventNames");
  outputCom.innerHTML +=
    '<div class="bg-gray-200 mx-20 py-2 w-3/5"><p class="mx-5 my-1 p-2 w-4/4 bg-white">' +
    addEventName +
    "</p></div>";
}
//to display the no:of likes
var numbOfClicks = 0;
function postLiked() {
  document.getElementById("likeBtn").innerHTML =
    "<i class='fa fa-thumbs-up'></i> Liked!";
  numbOfClicks += 1;
  if (numbOfClicks != 0) {
    if (numbOfClicks == 1) {
      document.getElementById("likeCount").innerHTML =
        numbOfClicks + " person likes this!";
    } else {
      document.getElementById("likeCount").innerHTML =
        numbOfClicks + " people have liked this!";
    }
  }
}
//to edit the heading
let editMode = false;
function saveBtn() {
  const heading = document.querySelector("#main-heading-area");
  const editButton = document.querySelector("#editBtn");
  const editButtonSpan = document.querySelector("#test");

  let editButtonText = editButtonSpan.innerText;

  if (editButtonText == "Save") {
    editButton.innerHTML =
      "<span id='test'>Edit</span> <i class=\"fas fa-edit text-md\"></i>";
  } else {
    editButton.innerHTML =
      "<span id='test'>Save</span><i class=\"fas fa-save text-md\"></i>";
  }

  let headingState = heading.getAttribute("disabled");
  headingState = !!headingState; //conver to boolean

  console.log(headingState);
  if (headingState) {
    heading.removeAttribute("disabled");
  } else {
    heading.setAttribute("disabled", "true");
  }

  heading.classList.toggle("heading-view-mode");
  heading.classList.toggle("edit-shadow");
  heading.focus();
//to edit the paragraph
  const paraContainer = document.querySelector("#para-container");
  if (!editMode) {
    editMode = true;
    const paraText = paraContainer.children[0].innerText;
    paraContainer.innerHTML = "";
    const textArea = document.createElement("textarea");
    textArea.classList.add("edit-para");
    textArea.value = paraText;
    paraContainer.appendChild(textArea);
  } else {
    editMode = false;
    const textAreaText = paraContainer.children[0].value;
    paraContainer.innerHTML = "";
    const para = document.createElement("p");
    para.innerHTML = textAreaText;
    paraContainer.appendChild(para);
  }
  paraContainer.classList.toggle("heading-view-mode");
  paraContainer.classList.toggle("edit-shadow");
  paraContainer.focus();
}
