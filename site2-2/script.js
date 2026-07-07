// 접속 비밀번호
const PASSWORD = "0125";

// 이동할 주소
const REDIRECT_URL = "https://naver.me/xLWVRN1y"

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
