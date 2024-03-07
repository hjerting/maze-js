const MARGIN = 20;
const ITEM_SIZE = 40;
const win_w = window.innerWidth;
const win_h = window.innerHeight;
let width = win_w - 2 * MARGIN;
let height = win_h - 2 * MARGIN;

function get_rows_cols(width, height, size) {
    console.log(width, height, size);
    const rows = Math.floor(height / size);
    const cols = Math.floor(width / size);
    console.log("r:", rows, "c:", cols);
    return [rows, cols];
}

let rows, cols;
[rows, cols] = get_rows_cols(width, height, ITEM_SIZE);
console.log("r,c:", rows, cols);
width = ITEM_SIZE * cols;
height = ITEM_SIZE * rows;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas);
console.log(ctx);

canvas.width = width;
canvas.height = height;

console.log("width:", width);
console.log("height:", height);

const maze = {

}

console.log(typeof(Storage));
console.log("rows:", rows, " cols:", cols);

function draw() {
    console.log("Running draw function")
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            ctx.fillStyle = `rgb(${r} ${g} ${b})`;
            ctx.fillRect(col * ITEM_SIZE, row * ITEM_SIZE, ITEM_SIZE, ITEM_SIZE);
        }
    }
}

function start() {
    setInterval(draw, 50);
}

ctx.fillStyle = "rgb(200 0 0)";
window.addEventListener("load", start);
