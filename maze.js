const MARGIN = 20;
const ITEM_SIZE = 20;
const win_w = window.innerWidth;
const win_h = window.innerHeight;

function get_rows_cols(width, height, margin, size) {
    console.log(width, height, margin, size);
    const rows = Math.floor((height - 2 * margin) / size);
    const cols = Math.floor((width - 2 * margin) / size);
    console.log("r:", rows, "c:", cols);
    return [rows, cols];
}

function get_x_y(width, heigth, rows, cols, size) {
    const x = Math.floor((width - (cols * size)) / 2);
    const y = Math.floor((heigth - (rows * size)) / 2);
    return [x, y];
}

let rows, cols, x, y;
[rows, cols] = get_rows_cols(win_w, win_h, MARGIN, ITEM_SIZE);
[x, y] = get_x_y(win_w, win_h, rows, cols, ITEM_SIZE);


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(canvas);
console.log(ctx);

canvas.width = win_w;
canvas.height = win_h;

console.log("width:", win_w);
console.log("height:", win_h);

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
            ctx.fillRect(x + col * ITEM_SIZE, y + row * ITEM_SIZE, ITEM_SIZE, ITEM_SIZE);
        }
    }
}

ctx.fillStyle = "rgb(200 0 0)";
window.addEventListener("load", draw);
