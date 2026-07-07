/* ==========================================================
   SETTINGS
========================================================== */

// 원하는 비밀번호로 변경하세요.
const PASSWORD = "029424";

/* ==========================================================
   ELEMENTS
========================================================== */

const card = document.getElementById("card");
const input = document.getElementById("password");
const button = document.getElementById("loginBtn");

/* ==========================================================
   CARD 3D EFFECT
========================================================== */

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    card.style.transform = "rotateX(0deg) rotateY(0deg)";

});

/* ==========================================================
   BUTTON RIPPLE
========================================================== */

button.addEventListener("click", function (e) {

    const ripple = document.createElement("span");

    ripple.className = "ripple";

    const rect = this.getBoundingClientRect();

    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";

    this.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 700);

});

/* ==========================================================
   LOGIN
========================================================== */

button.addEventListener("click", login);

input.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        login();

    }

});

function login() {

    const value = input.value.trim();

    if (value === PASSWORD) {

        success();

    } else {

        fail();

    }

}

/* ==========================================================
   SUCCESS
========================================================== */

function success() {

    button.innerHTML = "✔ 승인 완료";

    button.style.background =
        "linear-gradient(90deg,#38d66b,#7dff99)";

    button.style.color = "#0b2514";

    card.animate([

        { transform: "scale(1)" },
        { transform: "scale(1.02)" },
        { transform: "scale(1)" }

    ], {

        duration: 500

    });

    setTimeout(() => {

        // Google Drive 폴더로 이동
        window.location.href = "https://drive.google.com/drive/my-drive?hl=ko";

    }, 900);

}

/* ==========================================================
   FAIL
========================================================== */

function fail() {

    input.value = "";

    input.placeholder = "비밀번호가 올바르지 않습니다.";

    input.focus();

    card.classList.add("shake");

    setTimeout(() => {

        card.classList.remove("shake");

    }, 500);

}

/* ==========================================================
   INPUT GLOW
========================================================== */

input.addEventListener("focus", () => {

    card.style.boxShadow =
        "0 0 60px rgba(255,120,30,.25),0 30px 80px rgba(0,0,0,.55)";

});

input.addEventListener("blur", () => {

    card.style.boxShadow = "";

});

/* ==========================================================
   BUTTON HOVER GLOW
========================================================== */

button.addEventListener("mouseenter", () => {

    button.style.filter = "brightness(1.08)";

});

button.addEventListener("mouseleave", () => {

    button.style.filter = "";

});

/* ==========================================================
   RANDOM BACKGROUND MOVEMENT
========================================================== */

setInterval(() => {

    document.querySelector(".glow1").style.transform =
        `translate(${Math.random() * 40}px,${Math.random() * 20}px)`;

    document.querySelector(".glow2").style.transform =
        `translate(-${Math.random() * 30}px,${Math.random() * 40}px)`;

}, 5000);
