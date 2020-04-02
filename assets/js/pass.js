var pass=document.querySelector("#pass");
var pass_conf=document.querySelector("#pass_conf");
var sub=document.querySelector(".btn-primary");
sub.addEventListener("click",function(){
if(pass.textContent!=pass_conf.textContent)
    {alert("Passwords no not match")}
}

