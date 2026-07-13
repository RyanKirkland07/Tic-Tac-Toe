const gameboard = (() => {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    let turns = 0;

    const checkRow = (row) => {
        if(board[row][0] == board[row][1] && board[row][1] == board[row][2]){
            return true;
        }
        else{
            return false;
        }
    };

    const checkCol = (col) => {
        if(board[0][col] == board[1][col] && board[1][col] == board[2][col]){
            return true;
        }
        else{
            return false;
        }
    };

    const checkDiag = () => {
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ""){
            return true;
        }
        if(board[0][2] == board[1][1] && board[2][0] && board[0][2] != ""){
            return true;
        }
        return false;
    }

    const checkWin = (row, col, player) => {
        if(checkRow(row)){ 
            return true;
        }
        if(checkCol(col)){
            return true;
        }
        if(checkDiag()){
            return true;
        }
    };

    const gameOver = () => {
        console.log("Game Over. No Winners.")
        turns = 0;
    };

    const win = (winner) => {
        console.log(winner + " is the winner!")
        turns = 0;
    };

    const displayBoard = () => {
        let out = ""
        for(row of board){
            for(col of row){
                out += col + " ";
            }
            console.log(out);
            out = "";
        }
    }

    const verifyMove = (row, col) => {
        if(board[row][col] == ""){
            return true;
        }
        else{
            return false;
        }
    }

    const addMark = (row, col, player, DisplayController) => {
        if(!verifyMove(row, col)){
            console.log("Marker already in this cell");
            return;
        }
        board[row][col] = player.marker;
        turns++;
        displayBoard();
        DisplayController.displayMarker();
        if(checkWin(row, col)){
            win(player.name);
            DisplayController.displayResult(`The Winner Is ${player.name}!`); 
        }
        else if(turns == 9){
            gameOver();
            DisplayController.displayResult(`Game Ended In A Draw`); 
        }

        
    };

    const resetBoard = (DisplayController) =>{
        turns = 0;
        for(let row = 0; row <= 2; row++){
            for(let col = 0; col <= 2; col++){
                board[row][col] = "";
            }
        }

        DisplayController.resetDisplay;
    };

    return{
        addMark,
        resetBoard
    };
})();

function Player(name, marker){
    return{
        name,
        marker,
    }
}

const DisplayController = (() => {

    const displayMarker = (event, player) => {
        let mark = player.marker;
        let cell = event.target;

        cell.textContent = mark;
    }

    const resetDisplay = () => {
        const cells = document.querySelectorAll(".cell");
        const resultText = document.querySelector(".result");

        for(cell of cells){
            cell.textContent = "";
        }

        resultText.textContent = "";
    }

    const displayResult = (result) => {
        const resultText = document.querySelector(".result");

        resultText.textContent = result;
    }

    return {
        displayMarker,
        resetDisplay,
        displayResult
    }
})();

const player1 = Player("John", "X");
const player2 = Player("Jane", "O");
