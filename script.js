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
            

            // 1
            if(gameObject[1]==="X"&&
               gameObject[2]==="X"&&
               gameObject[3]==="X"

               ){
                console.log('x wins')
            }
            // 2
            else if(gameObject[4]==="X"&&
                gameObject[5]==="X"&&
                gameObject[6]==="X"){
                console.log('x wins')
            }
            // 3
            else if(gameObject[7]==="X"&&
                gameObject[8]==="X"&&
                gameObject[9]==="X"){
                console.log('x wins')
            }
            // 4
            else if(gameObject[1]==="X"&&
                gameObject[4]==="X"&&
                gameObject[7]==="X"){
                console.log('x wins')
            }
            // 5
            else if(gameObject[2]==="X"&&
                gameObject[5]==="X"&&
                gameObject[8]==="X"){
                console.log('x wins')
            }
            // 6
            else if(gameObject[3]==="X"&&
                gameObject[6]==="X"&&
                gameObject[9]==="X"){
                console.log('x wins')
            }
            // 7
            else if(gameObject[1]==="X"&&
                gameObject[5]==="X"&&
                gameObject[9]==="X"){
                console.log('x wins')
            }
            else if(gameObject[3]==="X"&&
                gameObject[5]==="X"&&
                gameObject[7]==="X"){
                console.log('x wins')
            }
            }
        }
    else if(player1=== false){
        if (this.classList.contains("empty")){
            this.classList.remove("empty")
            this.classList.add("O")
            this.innerHTML = "O"

        // console.log(this)
            player1 = true
            $whichPlayer.innerHTML = "Player 1 move"
            gameObject[parseInt(this.id)] = 'O'
            console.log(gameObject)
        }
            if(gameObject[1]==="O"&&
               gameObject[2]==="O"&&
               gameObject[3]==="O"
               ){
                console.log('O wins')
            }
            // 2
            else if(gameObject[4]==="O"&&
                gameObject[5]==="O"&&
                gameObject[6]==="O"){
                console.log('O wins')
            }
            // 3
            else if(gameObject[7]==="O"&&
                gameObject[8]==="O"&&
                gameObject[9]==="O"){
                console.log('O wins')
            }
            // 4
            else if(gameObject[1]==="O"&&
                gameObject[4]==="O"&&
                gameObject[7]==="O"){
                console.log('O wins')
            }
            // 5
            else if(gameObject[2]==="O"&&
                gameObject[5]==="O"&&
                gameObject[8]==="O"){
                console.log('O wins')
            }
            // 6
            else if(gameObject[3]==="O"&&
                gameObject[6]==="O"&&
                gameObject[9]==="O"){
                console.log('O wins')
            }
            // 7
            else if(gameObject[1]==="O"&&
                gameObject[5]==="O"&&
                gameObject[9]==="O"){
                console.log('O wins')
            }
            else if(gameObject[3]==="O"&&
                gameObject[5]==="O"&&
                gameObject[7]==="O"){
                console.log('O wins')
            }
    }
    let $empty = document.querySelectorAll('.empty')
    
    // console.log($empty.length)
    if ($empty.length<=0){
        // resetBoard()
        $whichPlayer.innerHTML = "Game Over"
    }


    }

    // debugger
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

function gameStatus(){



}



function resetBoard(){
    let $cells = document.querySelectorAll('.cell')
    for (let $cell of $cells){
        $cell.remove()
    }
    renderBoard()
}


renderBoard();


