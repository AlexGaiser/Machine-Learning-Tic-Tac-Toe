document.body.addEventListener('keydown',move)

// const $character = document.createElement('div')
const $gamespace = document.querySelector('.game-board')
const moveSpeed = 1

const pixelRatio = 6

let playGrid = {x:100,
                y:100}



function makeBlock(height, width, divclass, positionX, positionY){
    newBlock = document.createElement('div')
    newBlock.className = divclass
    newBlock.height = height
    newBlock.width = width
    newBlock.divclass = divclass    
    newBlock.x = positionX
    newBlock.y = positionY
    newBlock.style.left = (newBlock.x *pixelRatio) +'px'
    newBlock.style.top = (newBlock.y * pixelRatio) +'px'
    newBlock.style.height = height * pixelRatio +'px'
    newBlock.style.width = width*pixelRatio +'px'
       return newBlock
}


   
function Enemy(height, width, enemyId, divclass, enemyClass, positionX, positionY){
    // this.newBlock = document.createElement('div')
    this.divclass = divclass
    this.height = height
    this.width = width
    this.enemyClass = enemyClass    
    this.x = positionX
    this.y = positionY
    this.enemyId = enemyId
}

let Enemies = []
let enemy = null


function createEnemy(number, height, width, enemyId, divclass, enemyClass, positionX, positionY){
  for(let i = 0; i<number; i++){
    enemy = new Enemy(height, width, enemyId, divclass, enemyClass, Math.random() * positionX, Math.random()* positionY)
    Enemies.push(enemy)
  }
  for (let enemy of Enemies){
    renderEnemy(enemy)
  }
}

createEnemy(10, 10, 10, 1, 'block', 'medium', 89, 89)

createEnemy(100, 1, 1, 1, 'block', 'food', 99, 99)



console.log(Enemies.length)


function renderEnemy(enemy){
      newBlock = document.createElement('div')
      newBlock.classList.add(enemy.divclass)
      newBlock.classList.add(enemy.enemyClass)
      newBlock.style.top = enemy.x * pixelRatio +'px'
      newBlock.style.left = enemy.y * pixelRatio +'px'
      newBlock.style.height = enemy.height * pixelRatio +'px'
      newBlock.style.width = enemy.width *pixelRatio +'px'
      newBlock.id = enemy.enemyClass+enemy.enemyId
      $gamespace.append(newBlock)
}


overLapRemover(Enemies)

console.log(enemy)

let $character = new makeBlock(3, 3, 'box', 0,0)

$gamespace.append($character)

renderEnemy(enemy)
// renderEnemy(food)

// function renderObstacle(){   
//     let enemyId = 1
//     for (let i = 0; i<50; i++){
//         let enemyClass = 'food'
//         let newObstacle =  new makeBlock((1), (1), 'obstacle', (Math.random()*95), (Math.random()*95))
//         newObstacle.id =enemyClass + enemyId.toString()
//         newObstacle.classList.add(enemyClass)
        
//         $gamespace.append(newObstacle)
//         enemyId +=1
//     }
//     enemyId = 1    


//     for (let i = 0; i<25; i++){
//         let enemyClass = 'small'
//         let newObstacle =  new makeBlock((5), (5), 'obstacle', (Math.random()*85), (Math.random()*85))
//         newObstacle.id =enemyClass + enemyId.toString()
//         newObstacle.classList.add(enemyClass)
        
//         $gamespace.append(newObstacle)
//         enemyId +=1
//     }
//     enemyId = 1

//     for (let i = 0; i<10; i++){
//         enemyClass = 'medium'
//         let newObstacle =  new makeBlock((10), (10), 'obstacle', (Math.random()*85), (Math.random()*85))
//         newObstacle.id = enemyClass + enemyId.toString()
//         newObstacle.classList.add(enemyClass)
//         $gamespace.append(newObstacle)
//         enemyId +=1
//     }
//     enemyId = 1
//     for (let i = 0; i<5; i++){
//         enemyClass = 'large'
//         let newObstacle =  new makeBlock((15), (15), 'obstacle', (Math.random()*85), (Math.random()*85))
//         newObstacle.id = enemyClass + enemyId.toString()
//         newObstacle.classList.add(enemyClass)
//         $gamespace.append(newObstacle)
//         enemyId +=1
//     }
//     for (let i = 0; i<1; i++){
//         enemyClass = 'verylarge'
//         let newObstacle =  new makeBlock((30), (30), 'obstacle', (Math.random()*69), (Math.random()*69))
//         newObstacle.id = enemyClass + enemyId.toString()
//         newObstacle.classList.add(enemyClass)
//         $gamespace.append(newObstacle)
//         enemyId +=1
//     }


//     let allObstacles = document.querySelectorAll('.obstacle')
    

//     overLapRemover(".obstacle")
//     allObstacles = document.querySelectorAll('.obstacle')
//     let verylarge = document.querySelectorAll('.verylarge')

//     if (allObstacles.length < 10){
//         renderObstacle()
//     }
// }

// renderObstacle()


// let allObstacles = document.querySelectorAll('.obstacle')

function overLapRemover(objects){
    let collide = false
    iter = 0
    objectArray =[]
    object = Enemies
    for(let i = 0; i<object.length-1; i++){
        iter +=1
        for (let a =iter; a< object.length; a++) {
            if (collision(object[i], object[a])){
                object.splice(i)
                overLapRemover(objects)
                collide = true
            }           
        }
    }
    if(collide === true){
        overLapRemover(objects)
    }
    else{
      return  
    }
    
}



function move(evnt) {
      const keyCode = evnt.keyCode;
      if ([37, 38, 39, 40].includes(keyCode)) {
        evnt.preventDefault();
      
      switch (keyCode) {
        case 37:  
            moveLeft(); 
          break;
        case 38:
          moveUp();
          break;
        case 39:
          moveRight();
          break;
        case 40:
          moveDown();
          break;
      }
        setTimeout(checkEat,100)
    }
}


function moveLeft() {
    let potentialMove = Object.assign({}, $character)
    potentialMove.x -= moveSpeed
    if (inGrid(potentialMove)){
        $character.x = potentialMove.x
        $character.style.left = ($character.x) * pixelRatio +'px' 
        console.log($character.x)
    }
    else{
        console.log($character.x)
        return
    }

} 

function moveRight() {
    potentialMove = Object.assign({}, $character)
    potentialMove.x += moveSpeed
    if (inGrid(potentialMove)){
        $character.x = potentialMove.x
        $character.style.left = ($character.x) * pixelRatio +'px' 
        console.log($character.height)
        console.log($character.width)
    }
    else{
        return
    }

} 

function moveUp() {
    potentialMove = Object.assign({}, $character)
    potentialMove.y -= moveSpeed
    if (inGrid(potentialMove)){
        console.log($character.x)
        $character.y = potentialMove.y
        $character.style.top = ($character.y) * pixelRatio +'px' 
    }
    else{
        return
    }

} 
function moveDown() {
    potentialMove = Object.assign({}, $character)
    potentialMove.y += moveSpeed
    if (inGrid(potentialMove)){
        console.log($character.x)
        $character.y = potentialMove.y
        $character.style.top = ($character.y) * pixelRatio +'px' 
    }
    else{
        return
    }
}



function collision(object1,object2){
    if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
            object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
        return true
    }
}

function checkEat(){

    let obstacles = document.querySelectorAll('obstacles')
    // console.log(obstacles)
    for (let enemy of obstacles){
        if (collision($character, enemy))
            if ($character.height > enemy.height){
                enemy.delete()
                $character.height += 1
                $character.width += 1
                $character.style.height = $character.height*pixelRatio + 'px'
                $character.style.width =  $character.width * pixelRatio + 'px'
            }
            else{
                location.reload()
                
            }
    }

}




function inGrid(object){
   if (object.x < 0 || object.y < 0 || object.x +object.height > 100 || object.y +object.height> 100) {
    // alert('out of grid')
    return false
  }
  return true;
}
