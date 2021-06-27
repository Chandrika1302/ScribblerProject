//added functionality inorder to dispaly delete blog
var blogModal=document.getElementById("myModalBlog");
var blogModal1=document.getElementById("myModalBlog1");
var blogModal2=document.getElementById("myModalBlog2");
var blogModal3=document.getElementById("myModalBlog3");
var blogModal4=document.getElementById("myModalBlog4");


var blogBtn=document.getElementById("delete-icon");
var blogBtn1=document.getElementById("delete-icon1");
var blogBtn2=document.getElementById("delete-icon2");
var blogBtn3=document.getElementById("delete-icon3");
var blogBtn4=document.getElementById("delete-icon4");

blogBtn.onclick=function(){
    blogModal.style.display="block";
}

blogBtn1.onclick=function(){
    blogModal1.style.display="block";
}
blogBtn2.onclick=function(){
    blogModal2.style.display="block";
}
blogBtn3.onclick=function(){
    blogModal3.style.display="block";
}
blogBtn4.onclick=function(){
    blogModal4.style.display="block";
}


