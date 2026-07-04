const button=document.getElementById("loginBtn");

button.addEventListener("click",()=>{

const pw=document.getElementById("pw").value.trim();

  if(pw ==="1212"){
    
        window.location.href = "https://map.naver.com/p/search/%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC/place/34347279?placePath=%2Fhome%3FabtExp%3DNEW-PLACE-SEARCH%3A5%26bk_query%3D%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue%26from%3Dmap%26fromPanelNum%3D2%26timestamp%3D202607041323%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC&bk_query=%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC&entry=pll&from=nx&fromNxList=true&searchType=place";

alert("비밀번호를 입력하세요.");

return;

}

alert("로그인 성공");

});
