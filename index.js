
var inputemailEl = document.getElementById("usernameEl");
var inputpasswordEl = document.getElementById("passwordEl");


var loginBtnEL = document.getElementById("loginBtn");
var erromsgEl = document.getElementById("Errormsg");
erromsgEl.textContent = "";
function login(){
    if(inputemailEl.value=="" || inputpasswordEl.value==""){
        erromsgEl.textContent = "Incorrect Username & Password. Please try again";
    }
    if(inputemailEl.value.length>=4){
        erromsgEl.textContent = "Incorrect Username & Password. Please try again";
    }
    if(inputpasswordEl.value.length>=6 && inputpasswordEl.value.length<=12 ){
        erromsgEl.textContent = "";
    }
}


function errorchange(){
    if(inputemailEl.value=="" && inputpasswordEl.value=="")
    {
    erromsgEl.textContent = "";
  }
}

