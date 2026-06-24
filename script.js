function saveMessage(){

var title =
document.getElementById("title").value;

var message =
document.getElementById("message").value;

if(title=="" || message==""){

alert("Fill all fields");

return;

}

localStorage.setItem(
"capsuleTitle",
title
);

localStorage.setItem(
"capsuleMessage",
message
);

alert("Message Saved");

}



function showMessage(){

var title =
localStorage.getItem(
"capsuleTitle"
);

var message =
localStorage.getItem(
"capsuleMessage"
);

var output =
document.getElementById(
"output"
);

if(title==null){

output.style.display="block";

output.innerHTML=
"No saved message";

return;

}

output.style.display="block";

output.innerHTML=

"<h3>"+title+"</h3>"+

"<p>"+message+"</p>";

}



function deleteMessage(){

localStorage.removeItem(
"capsuleTitle"
);

localStorage.removeItem(
"capsuleMessage"
);

document.getElementById(
"output"
).innerHTML="";

alert("Capsule Deleted");

}
