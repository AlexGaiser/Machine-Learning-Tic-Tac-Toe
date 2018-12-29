
// I looked at this page for information on the minmax algorighm
// https://medium.freecodecamp.org/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37

function game(){
    let aiPlayer = "O"
    let huPlayer = "X"
    let availSpots = []

    const $gameBoard = document.querySelector('.game-board')
    let $whichPlayer = document.querySelector('#player')
    let move = 0
    let gameObject =   [0,1,2,3,4,5,6,7,8]
 
 
    function emptyCells(board) {
        return board.filter( cell =>  cell !="O" && cell != "X" )
    }

 function miniMax(board, player){
        let availSpots = emptyCells(board)
        if (gameWon(board, huPlayer)){
            return {score:-10};
        }
        else if(gameWon(board, aiPlayer)){
            return {score:10};
        }
        else if(availSpots.length ===0){
            return {score:0}
        }

        let moves = []

        for (let index in availSpots){
            let move = {}
            move.index= availSpots[index]
            board[availSpots[index]]= player

            if (player == aiPlayer){
                let result = miniMax(board, huPlayer)
                move.score = result.score
            }
            else{
                let result = miniMax(board, aiPlayer)
                move.score = result.score
            }
            board[availSpots[index]] = move.index;
            moves.push(move)
       }
       let bestMove
       if (player == aiPlayer){
           bestScore = -10000
            console.log(moves)

           for (let i = 0; i<moves.length; i++){
                if (moves[i].score > bestScore){
                    bestScore = moves[i].score
                    bestMove = i
                }
           }
        }
        else{
            let bestScore = 10000
            for(let i = 0; i<moves.length; i++){
                if (moves[i].score < bestScore){
                    bestScore = moves[i].score
                    bestMove = i 
                }
            }
        }
        return moves[bestMove]
}

    function mark() {
        moveSquare = this
            if (this.classList.contains("empty")){
                this.classList.remove("empty")
                this.classList.add("X")
                this.innerHTML = "X"
                gameObject[parseInt(this.id)] = 'X'
                
                try{
                aiChoice = miniMax(gameObject, aiPlayer).index
                

                console.log('ai move ' + aiChoice)
                document.querySelectorAll('.cell')
                $cells = document.querySelectorAll('.cell')
                $cells[aiChoice].classList.add("O")
                $cells[aiChoice].classList.remove("empty")
                gameObject[parseInt($cells[aiChoice].id)] = "O"
                $cells[aiChoice].innerHTML = "O"
                }
                
                catch{}


                if (gameWon(gameObject, "O")){
                    function xwon(){
                    alert('O is the winner!') 
                    resetBoard()}
                    setTimeout(xwon,200)
                }

            }
            let $empty = document.querySelectorAll('.empty')

            if($empty.length<=0){
                    function catGame(){alert("Cat's Game")
                    resetBoard()}
                    setTimeout(catGame,200)

            }

}

    function renderBoard(){
        let move= 0
        let player1 = true
        $whichPlayer.innerHTML = "Player 1 move"
        for (let i=0; i<9; i++ ){
        let $cell = document.createElement('div')
        $cell.classList.add("cell", "empty")
        $cell.id = i
        $gameBoard.append($cell)
        addGameClick()
        }
    }

    function addGameClick(){
        let $cells = document.querySelectorAll('.cell')
        for(let $cell of $cells){
            $cell.addEventListener('click', mark)
        }

    }

    function gameWon(board,value){
                if(board[0]===value&&
                   board[1]===value&&
                   board[2]===value){
                    return true
                }
                // 2
                else if(board[3]===value&&
                    board[4]===value&&
                    board[5]===value){
                    return true
                }
                // 3
                else if(board[6]===value&&
                    board[7]===value&&
                    board[8]===value){
                    return true
                }
                // 4
                else if(board[0]===value&&
                    board[3]===value&&
                    board[6]===value){
                    return true
                }
                // 5
                else if(board[1]===value&&
                    board[4]===value&&
                    board[7]===value){
                    return true 
                }
                // 6
                else if(board[2]===value&&
                    board[5]===value&&
                    board[8]===value){
                    return true
                }
                // 7
                else if(board[0]===value&&
                    board[4]===value&&
                    board[8]===value){
                    return true
                }
                else if(board[2]===value&&
                    board[4]===value&&
                    board[6]===value){
                    return true
                }
                else{
                    return false
                }
    }

    renderBoard();

}

function resetBoard(){
        let $cells = document.querySelectorAll('.cell')
        for (let $cell of $cells){
            $cell.remove()
        }
        game()
    }
game()