// bugs
// starts 0 at start if reset on red




const $gameBoard = document.querySelector('.game-board')
let player1 = true
let $whichPlayer = document.querySelector('#player')
let move = 0
// let $empty = document.querySelectorAll('.empty')

let gameObject = {1:0,2:0,3:0,
                  4:0,5:0,6:0,
                  7:0,8:0,9:0}


function mark() {
    // console.log(player1)
    if (player1 === true){
        if (this.classList.contains("empty")){
            this.classList.remove("empty")
            this.classList.add("X")
            this.innerHTML = "X"
            player1 = false
            $whichPlayer.innerHTML= "Player 2 move"
            gameObject[parseInt(this.id)] = 'X'
            if (gameWon("X")){
                function xwon(){alert('X is the winner!')}
                setTimeout(xwon,200)
            }
        }
    }

    else if(player1=== false){
        if (this.classList.contains("empty")){
            this.classList.remove("empty")
            this.classList.add("O")
            this.innerHTML = "O"
            player1 = true
            $whichPlayer.innerHTML = "Player 1 move"
            gameObject[parseInt(this.id)] = 'O'
            if(gameWon("O")){
                function Owon(){alert('O is the winner!')}
                setTimeout(Owon,200)
            }
        }
    }
    let $empty = document.querySelectorAll('.empty')
    
    // console.log($empty.length)
    if ($empty.length<=0){
        // resetBoard()
        $whichPlayer.innerHTML = "Game Over"
    }
}

function renderBoard(){
    let move= 0
    let player1 = true
    $whichPlayer.innerHTML = "Player 1 move"
    for (let i=0; i<9; i++ ){
    let $cell = document.createElement('div')
    $cell.classList.add("cell", "empty")
    // $cell.innerHTML= i+1
    $cell.id = i+1
    // console.log($cell.classList)
    $gameBoard.append($cell)
    addGameClick()
    }
}

function addGameClick(){
    let $cells = document.querySelectorAll('.cell')
    // console.log(cells)
    for(let $cell of $cells){
        // console.log($cell)
        $cell.addEventListener('click', mark)
    }

}

function gameWon(value){
            if(gameObject[1]===value&&
               gameObject[2]===value&&
               gameObject[3]===value){
                return true
            }
            // 2
            else if(gameObject[4]===value&&
                gameObject[5]===value&&
                gameObject[6]===value){
                return true
            }
            // 3
            else if(gameObject[7]===value&&
                gameObject[8]===value&&
                gameObject[9]===value){
                return true
            }
            // 4
            else if(gameObject[1]===value&&
                gameObject[4]===value&&
                gameObject[7]===value){
                return true
            }
            // 5
            else if(gameObject[2]===value&&
                gameObject[5]===value&&
                gameObject[8]===value){
                return true 
            }
            // 6
            else if(gameObject[3]===value&&
                gameObject[6]===value&&
                gameObject[9]===value){
                return true
            }
            // 7
            else if(gameObject[1]===value&&
                gameObject[5]===value&&
                gameObject[9]===value){
                return true
            }
            else if(gameObject[3]===value&&
                gameObject[5]===value&&
                gameObject[7]===value){
                return true
            }
            else{
                console.log('no winner')
            }
}


function resetBoard(){
    let $cells = document.querySelectorAll('.cell')
    for (let $cell of $cells){
        $cell.remove()
    }
    renderBoard()
}


function computerMove(){
    
}




renderBoard();


