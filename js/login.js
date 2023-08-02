document.getElementById("btn-submit").addEventListener("click",function(){
    // console.log("btn sumit clicked");
    const emailFiled = document.getElementById("user-email");  
    const email = emailFiled.value;
   
    const passwordFiled = document.getElementById("user-password");
    const password = passwordFiled.value;
    
//    DO Not  Verify Email ON The Client Side

if(email === "sifat@email.com" && password === "12345" ){
    window.location.href = "bank.html";
}

else{
    alert("halarput wrong password or email");
}

})