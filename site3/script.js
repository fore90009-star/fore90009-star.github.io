// 접속 비밀번호
const PASSWORD = "0365";

// 이동할 주소
const REDIRECT_URL = "https://map.naver.com/p/search/%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC/place/34347279?placePath=%2Fhome%3FabtExp%3DNEW-PLACE-SEARCH%3A5%26bk_query%3D%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue%26from%3Dmap%26fromPanelNum%3D2%26timestamp%3D202607041323%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC&bk_query=%EB%8C%80%EC%A0%84%20%EC%84%B8%ED%95%98%EC%B9%98%EA%B3%BC&entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh";

const loginBtn = document.getElementById("loginBtn");
const input = document.getElementById("pw");

// 확인 버튼 클릭
loginBtn.addEventListener("click", login);

// 엔터키 로그인
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        login();
    }
});

function login() {

    const pw = input.value.trim();

    if (pw === PASSWORD) {

        // 성공 시 이동
        window.location.href = REDIRECT_URL;

    } else {

        alert("비밀번호가 올바르지 않습니다.");
        input.value = "";
        input.focus();

    }

}
