const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function top() {
    let xa = canvas.width / 2;
    let xb = canvas.width / 2;

    setInterval(() => {
        if (xa >= 0) {
            context.beginPath();
            context.moveTo(xa, 0);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            xa--;
        }
    
        if (xb <= canvas.width) {
            context.beginPath();
            context.moveTo(xb, 0);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            xb++;
        }
    }, 0.1);
}

function middleTop() {
    let y = 0;

    setInterval(() => {
        if (y <= canvas.height / 2) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width, y);
            context.lineTo(window.innerWidth / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            y++;
        }
    }, 0.1)
}

function middleBottom() {
    let y = canvas.height;

    setInterval(() => {
        if (y >= canvas.height / 2) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(canvas.width, y);
            context.lineTo(window.innerWidth / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            y--;
        }
    }, 0.1)
}

function bottom() {
    let xa = canvas.width / 2;
    let xb = canvas.width / 2;

    setInterval(() => {
        if (xa >= 0) {
            context.beginPath();
            context.moveTo(xa, canvas.height);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            xa--;
        }
    
        if (xb <= canvas.width) {
            context.beginPath();
            context.moveTo(xb, canvas.height);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            xb++;
        }
    }, 0.1);
}

async function main() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    top();
    middleTop();
    middleBottom();
    bottom();
}

main();

window.addEventListener("resize", () => {
    main();
})