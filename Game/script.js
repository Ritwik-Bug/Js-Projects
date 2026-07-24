const board = document.querySelector('.board');

const blockH = 30;
const blockW = 30;

const cols = Math.floor(board.clientWidth / blockW);
const rows = Math.floor(board.clientHeight / blockH);
const blocks=[];
const snake=[{
    x:1,y:3
},{
    x:1,y:4
},{
    x:1,y:5
} ]

let direction='left'

// for (let i = 0; i < row * col; i++) {
//     const block = document.createElement('div');
//     block.classList.add("block");

//     board.appendChild(block);   // Add block to the board
// }

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div');
        block.classList.add("block");

        board.appendChild(block);   // Add block to the board

        block.innerText = `${row}-${col}`;
        blocks[`${row}-${col}`] = block
    }
}

function render(){
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}

render();

setInterval(() => {
    let head;

    if (direction === "left") {
        head = {
            x: snake[0].x,
            y: snake[0].y - 1
        };
    }

    snake.unshift(head);
    snake.pop();

    render();
}, 300);