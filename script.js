let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        if (checkWinner(currentPlayer)) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
            gameOver = true;
        } else if (isBoardFull()) {
            document.getElementById('status').innerText = `It's a tie!`;
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner(player) {
    return (board[0] === player && board[1] === player && board[2] === player) ||
           (board[3] === player && board[4] === player && board[5] === player) ||
           (board[6] === player && board[7] === player && board[8] === player) ||
           (board[0] === player && board[3] === player && board[6] === player) ||
           (board[1] === player && board[4] === player && board[7] === player) ||
           (board[2] === player && board[5] === player && board[8] === player) ||
           (board[0] === player && board[4] === player && board[8] === player) ||
           (board[2] === player && board[4] === player && board[6] === player);
}

function isBoardFull() {
    return board.every(cell => cell !== '');
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('status').innerText = '';
    Array.from(document.getElementById('board').children).forEach(cell => cell.innerText = '');
}
