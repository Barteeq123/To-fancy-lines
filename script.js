let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function forLoop(x, y, increase) {
    
}

function main() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = canvas.width / 2;
    function dupa() {
        setTimeout(() => {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(canvas.width / 2, canvas.height / 2);
            context.stroke();
            context.closePath();
            x--;
            if (x >= 0) {
                dupa();
            }
        }, 0.1)
    }

    dupa();
}

main();

window.addEventListener("resize", () => {
    main();
})