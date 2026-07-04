const button=document.getElementById("loginBtn");

button.addEventListener("click",()=>{

const pw=document.getElementById("pw").value.trim();

if(pw==="2580"){

alert("비밀번호를 입력하세요.");

return;

}

alert("로그인 성공");

});
