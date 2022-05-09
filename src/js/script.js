import "../css/style.css";
// eslint-disable-next-line no-undef
let keys = require("./keyValue.json"),
    container = document.createElement("div"),
    text = document.createElement("textarea");

/* 
class Keys {
    constructor(key, shiftKey, keyEng, shiftKeyEng, keyCode, shiftKeyCode, shiftKeyCodeEng) {
        this.key = key;
        this.shiftKey = shiftKey;
        this.keyEng = keyEng;
        this.shiftKeyEng = shiftKeyEng;
        this.keyCode = keyCode;
        this.shiftKeyCode = shiftKeyCode;
        this.shiftKeyCodeEng = shiftKeyCodeEng;
    }
    returnCode() {
        return this.keyCode;
    }
} 
*/
container.classList.add("keyboard");
container.append(text);
document.body.append(container);

for (let i = 1; i <= 5; i++) {
    let line = document.createElement("div");
    line.classList.add("line", `line-${i}`);
    container.append(line);
}

// keys.forEach(item => {
//     // let k = new Keys(item.key, item.shiftKey, item.keyEng, item.shiftKeyEng, item.keyCode, item.shiftKeyCode, item.shiftKeyCodeEng);
//     lines[--item.line].innerHtml +=`
//     <div class="key ${item.code}">
//         <span class="key-value">${item.key}</span>
//         <span class="shiftKey">${item.shiftKey}</span>
//         <span class="keyEng">${item.keyEng}</span>
//         <span class="shiftKeyEng">${item.shiftKeyEng}</span>
//     </div>`;
// });

keys.forEach(item => {
    let lines = document.querySelectorAll(".line");
    lines[--item.line].innerHTML += `
    <div class="key ${item.code}">
    <span class="ru">
        <span class="key-value">${item.key}</span>
        <span class="shiftKey hidden">${item.shiftKey}</span>
    </span>
    <span class="eng hidden">
        <span class="key-value">${item.keyEng}</span>
        <span class="shiftKey hidden">${item.shiftKeyEng}</span>
    </span>
    </div>`;
});

container.addEventListener("click", (e) => {
    if ((e.target && e.target.matches("span"))) {
        console.log(e.target.textContent);
        if ((e.target.textContent == "CapsLock" || e.target.textContent == "Shift" || e.target.textContent == "Control" || e.target.textContent == "Alt" || e.target.textContent == "OS" || e.target.textContent == "Backspace" || e.target.textContent == "Delete")) {
            text.value += "";
        } else if (e.target.textContent == "Tab") {
            e.preventDefault();
            text.value += "\t";
        } else if (e.target.textContent == "Enter") {
            text.value += "\n";
        } else if (e.target.textContent == "ArrowLeft") {
            text.value += "←";
        } else if (e.target.textContent == "ArrowUp") {
            text.value += "↑";
        } else if (e.target.textContent == "ArrowDown") {
            text.value += "↓";
        } else if (e.target.textContent == "ArrowRight") {
            text.value += "→";
        } else {
            text.value += e.target.textContent;
        }
    }
});
let key = document.querySelectorAll(".key");
let keyRu = document.querySelectorAll(".ru");
let keyEng = document.querySelectorAll(".eng");
let keyValueRu = document.querySelectorAll(".ru .key-value");
let keyShiftRu = document.querySelectorAll(".ru .shiftKey");
let keyValueEng = document.querySelectorAll(".eng .key-value");
let keyShiftEng = document.querySelectorAll(".eng .shiftKey");
let CapsLock = document.querySelector(".key.CapsLock");

window.addEventListener("keydown", (e) => {
    console.log(e.key);
    key.forEach((item, i) => {
        if (e.ctrlKey && e.altKey && keyEng[i].classList.contains("hidden")) {
            keyRu[i].classList.add("hidden");
            keyEng[i].classList.remove("hidden");
        } else if (e.ctrlKey && e.altKey && keyRu[i].classList.contains("hidden")) {
            keyRu[i].classList.remove("hidden");
            keyEng[i].classList.add("hidden");
        }
        if (e.shiftKey && keyEng[i].classList.contains("hidden")) {
            keyValueRu[i].classList.add("hidden");
            keyShiftRu[i].classList.remove("hidden");
        } else if (e.shiftKey && keyRu[i].classList.contains("hidden")) {
            keyValueEng[i].classList.add("hidden");
            keyShiftEng[i].classList.remove("hidden");
        }
        if (e.key == "CapsLock" && keyEng[i].classList.contains("hidden")) {
            CapsLock.classList.add("active");
            keyValueRu[i].classList.toggle("hidden");
            keyShiftRu[i].classList.toggle("hidden");
        } else if (e.key == "CapsLock" && keyRu[i].classList.contains("hidden")) {
            CapsLock.classList.add("active");
            keyValueEng[i].classList.add("hidden");
            keyShiftEng[i].classList.add("hidden");
        }
        if (item.classList.contains(e.code)) {
            item.classList.add("active");
        }
    });
    if ((e.key == "CapsLock" || e.key == "Shift" || e.key == "Control" || e.key == "Alt" || e.key == "OS" || e.key == "Backspace" || e.key == "Delete")) {
        text.value += "";
    } else if (e.key == "Tab") {
        e.preventDefault();
        text.value += "\t";
    } else if (e.key == "Enter") {
        text.value += "\n";
    } else if (e.key == "ArrowLeft") {
        text.value += "←";
    } else if (e.key == "ArrowUp") {
        text.value += "↑";
    } else if (e.key == "ArrowDown") {
        text.value += "↓";
    } else if (e.key == "ArrowRight") {
        text.value += "→";
    } else {
        text.value += e.key;
    }
});
window.addEventListener("keyup", (e) => {
    key.forEach((item, i) => {
        if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && keyEng[i].classList.contains("hidden")) {
            keyValueRu[i].classList.remove("hidden");
            keyShiftRu[i].classList.add("hidden");
        } else if ((e.code == "ShiftLeft" || e.code == "ShiftRight") && keyRu[i].classList.contains("hidden")) {
            keyValueEng[i].classList.remove("hidden");
            keyShiftEng[i].classList.add("hidden");
        }
        if (item.classList.contains(e.code)) {
            item.classList.remove("active");
        }
    });
});