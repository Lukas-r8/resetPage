
function sendForm(){
  var form = document.querySelector("form")
  var inputs = document.getElementsByTagName("input")
  var newPass = inputs[0].value
  var confirmation = inputs[1].value
  var p = document.querySelector("p")
  console.log(newPass, confirmation);
  if (newPass.length < 8) {
    p.style.color = "red";
    p.innerHTML = "Password should contain at least 8 characters";
    return
  }
  if (newPass === confirmation){
    // var request = new XMLHttpRequest()
    // request.open("POST", `${host}/changePassword/${token}`)
    // request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // request.onreadystatechange = function(){
    //   if (request.readyState === 4){
    //     var msgObject = JSON.parse(request.response)
    //     if (msgObject.msg) {
    //       element.innerHTML = msgObject.msg
    //     } else {
    //       element.innerHTML = msgObject.description
    //     }
    //   }
    // }
    // request.send(JSON.stringify({newPass}))

    p.style.color = "green";
    p.innerHTML = "Your Password has been changed!";

  } else {
    p.style.color = "red";
    p.innerHTML = "Password and confirmation must be the same";
  }
}
