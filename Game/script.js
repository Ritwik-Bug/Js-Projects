const board = document.querySelector('.board');

const blockH = 30;
const blockW = 30;

const col = Math.floor(board.clientWidth / blockW);
const row = Math.floor(board.clientHeight / blockH);

for (let i = 0; i < row * col; i++) {
    const block = document.createElement('div');
    block.classList.add("block");

    board.appendChild(block);   // Add block to the board
}