let password = "7934";
let enteredPassword = "";

const dots = document.querySelectorAll(".pin-dots span");
const message = document.getElementById("message");
const card = document.querySelector(".login-card");

const loginScreen = document.getElementById("login-screen");
const envelopeScreen = document.getElementById("envelope-screen");

const letterScreen = document.getElementById("letter-screen");
const letterScreen2 = document.getElementById("letter-screen-2");
const letterScreen3 = document.getElementById("letter-screen-3");

const envelope = document.querySelector(".envelope");


/* ==============================
   NHẬP SỐ
============================== */

function pressNumber(number) {

    if (enteredPassword.length >= 4) {
        return;
    }

    enteredPassword += number;

    updateDots();

    if (enteredPassword.length === 4) {
        setTimeout(checkPassword, 300);
    }
}


/* ==============================
   KIỂM TRA MẬT KHẨU
============================== */

function checkPassword() {

    if (enteredPassword === password) {

        message.textContent =
            "Khó thé cũng đoánn được cơ ❤️";

        setTimeout(() => {

            loginScreen.classList.add("hidden");
            envelopeScreen.classList.remove("hidden");

        }, 800);

    } else {

        message.textContent =
            "Hong sao, thử lại nè<3";

        card.classList.add("shake");

        setTimeout(() => {
            card.classList.remove("shake");
        }, 400);

        setTimeout(() => {

            enteredPassword = "";

            updateDots();

            message.textContent = "";

        }, 700);
    }
}


/* ==============================
   XÓA SỐ
============================== */

function deleteNumber() {

    if (enteredPassword.length > 0) {

        enteredPassword =
            enteredPassword.slice(0, -1);

        updateDots();

        message.textContent = "";
    }
}


/* ==============================
   CẬP NHẬT 4 CHẤM
============================== */

function updateDots() {

    dots.forEach((dot, index) => {

        if (index < enteredPassword.length) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });
}


/* ==============================
   PHONG THƯ
============================== */

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    /* Phong thư bắt đầu thu nhỏ */

    setTimeout(() => {

        envelopeScreen.classList.add("leaving");

    }, 1100);


    /* Chuyển sang trang 1 */

    setTimeout(() => {

        envelopeScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        requestAnimationFrame(() => {

            letterScreen.classList.add("show-letter");

        });

    }, 1900);

});


/* ==============================
   TRANG 1 → TRANG 2
============================== */

function nextPage() {

    letterScreen.classList.add("page-leaving");

    setTimeout(() => {

        letterScreen.classList.add("hidden");

        letterScreen.classList.remove("page-leaving");

        letterScreen2.classList.remove("hidden");

        requestAnimationFrame(() => {

            letterScreen2.classList.add("page-show");

        });

    }, 700);
}


/* ==============================
   TRANG 2 → TRANG 3
============================== */

function nextPage2() {

    letterScreen2.classList.add("page-leaving");

    setTimeout(() => {

        letterScreen2.classList.add("hidden");

        letterScreen2.classList.remove("page-leaving");

        letterScreen3.classList.remove("hidden");

        requestAnimationFrame(() => {

            letterScreen3.classList.add("show-letter");

        });

    }, 700);
}


/* ==============================
   TRANG 3
============================== */

/* =========================================
   TRÁI TIM / ẢNH RƠI
========================================= */

const fallingImages = [

    "images/PThuy Tram1.jpg",
    "images/PThuy Tram2.jpg",
    "images/PThuy Tram3.jpg",
    "images/PThuy Tram4.jpg",
    "images/PThuy Tram5.jpg",
    "images/PThuy Tram6.jpg",
    "images/PThuy Tram7.jpg",
    "images/PThuy Tram8.jpg",
    "images/PThuy Tram9.jpg",
    "images/PThuy Tram10.jpg",
    "images/PThuy Tram11.jpg",
    "images/PThuy Tram12.jpg"

];


function createHeart() {

    const item =
        document.createElement("div");

    item.className = "falling-heart";


    /* ==============================
       NẾU ĐANG Ở TRANG 1, 2 HOẶC 3
       → RƠI ẢNH
    ============================== */

    const onLetterPage =
        !letterScreen.classList.contains("hidden") ||
        !letterScreen2.classList.contains("hidden") ||
        !letterScreen3.classList.contains("hidden");


    if (onLetterPage) {

        const image =
            document.createElement("img");

        const randomImage =
            fallingImages[
                Math.floor(
                    Math.random() *
                    fallingImages.length
                )
            ];

        image.src = randomImage;

        image.className = "falling-image";

        item.appendChild(image);

    }

    /* ==============================
       CÁC TRANG TRƯỚC
       → RƠI TRÁI TIM
    ============================== */

    else {

        item.textContent = "♥";

    }


    /* Vị trí */

    item.style.left =
        Math.random() * 100 + "vw";


    /* Kích thước */

    const size =
        Math.random() * 20 + 25;

    item.style.fontSize =
        size + "px";


    /* Tốc độ */

    const duration =
        Math.random() * 3 + 5;

    item.style.animationDuration =
        duration + "s";


    /* Độ trễ */

    item.style.animationDelay =
        Math.random() * 0.5 + "s";


    document.body.appendChild(item);


    /* Xóa */

    setTimeout(() => {

        item.remove();

    }, (duration + 1) * 1000);

}


/* Chỉ tạo 1 vòng lặp */

setInterval(createHeart, 700);