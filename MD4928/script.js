/* ==========================================================
   SETTINGS
========================================================== */

const PASSWORD = "029424";

/* ==========================================================
   ELEMENTS
========================================================== */

const card = document.getElementById("card");
const input = document.getElementById("password");
const button = document.getElementById("loginBtn");

const loginPage = document.getElementById("loginPage");
const linkTree = document.getElementById("linkTree");

/* ==========================================================
   CARD 3D EFFECT
========================================================== */

document.addEventListener("mousemove", (e) => {

    if (!card) return;

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    if (!card) return;

    card.style.transform = "rotateX(0deg) rotateY(0deg)";

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

    button.style.color = "#111";

    setTimeout(() => {

        loginPage.style.display = "none";
        linkTree.style.display = "flex";

    }, 900);

}

/* ==========================================================
   FAIL
========================================================== */

function fail() {

    input.value = "";

    input.placeholder = "비밀번호가 올바르지 않습니다.";

    input.focus();

    card.animate([
        { transform: "translateX(0px)" },
        { transform: "translateX(-10px)" },
        { transform: "translateX(10px)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0px)" }
    ], {
        duration: 400
    });

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
   BUTTON EFFECT
========================================================== */

button.addEventListener("mouseenter", () => {

    button.style.filter = "brightness(1.08)";

});

button.addEventListener("mouseleave", () => {

    button.style.filter = "";

});

/* ==========================================================
   BACKGROUND
========================================================== */

setInterval(() => {

    const glow1 = document.querySelector(".glow1");
    const glow2 = document.querySelector(".glow2");

    if (glow1) {

        glow1.style.transform =
            `translate(${Math.random()*40}px,${Math.random()*20}px)`;

    }

    if (glow2) {

        glow2.style.transform =
            `translate(-${Math.random()*30}px,${Math.random()*40}px)`;

    }

},5000);
