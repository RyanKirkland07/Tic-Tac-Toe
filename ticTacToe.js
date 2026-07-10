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
    };

    const win = (winner) => {
        console.log(winner + " is the winner!")
    };

    const addMark = (row, col, marker, player) => {
        board[row][col] = marker;
        turns++;
        if(checkWin(row, col, player)){
            win(player);
        }
        else if(turns == 9){
            gameOver();
        }
    };

    return{
        addMark
    };
})();
