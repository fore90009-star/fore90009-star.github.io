// 접속 비밀번호
const PASSWORD = "2580";

// 이동할 주소
https://map.naver.com/p/search/%EC%84%B8%EC%83%81%EC%97%90%ED%95%98%EB%82%98%EB%BF%90%EC%9D%B8%EC%B9%98%EA%B3%BC/place/1733097457?placePath=%2Fhome%3FabtExp%3DNEW-PLACE-SEARCH%3A6%26bk_query%3D%EC%84%B8%EC%83%81%EC%97%90%ED%95%98%EB%82%98%EB%BF%90%EC%9D%B8%EC%B9%98%EA%B3%BC%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue%26from%3Dmap%26fromPanelNum%3D2%26timestamp%3D202607061323%26locale%3Dko%26svcName%3Dmap_pcv5%26searchText%3D%EC%84%B8%EC%83%81%EC%97%90%ED%95%98%EB%82%98%EB%BF%90%EC%9D%B8%EC%B9%98%EA%B3%BC&placeSearchOption=abtExp%3DNEW-PLACE-SEARCH%253A6%26bk_query%3D%25EC%2584%25B8%25EC%2583%2581%25EC%2597%2590%25ED%2595%2598%25EB%2582%2598%25EB%25BF%2590%25EC%259D%25B8%25EC%25B9%2598%25EA%25B3%25BC%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EC%2584%25B8%25EC%2583%2581%25EC%2597%2590%25ED%2595%2598%25EB%2582%2598%25EB%25BF%2590%25EC%259D%25B8%25EC%25B9%2598%25EA%25B3%25BC%26x%3D127.383585%26y%3D36.353850&searchType=place&c=15.00,0,0,0,dh

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
