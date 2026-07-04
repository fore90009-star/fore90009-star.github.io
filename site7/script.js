const button=document.getElementById("loginBtn");

button.addEventListener("click",()=>{

const pw=document.getElementById("pw").value.trim();

if(pw===""){

alert("비밀번호를 입력하세요.");

return;

}

alert("입력되었습니다.");

});