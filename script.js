console.log("Welcome to Tic_Tac_Toe")
let music = new Audio("tic tac toe.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover =false

// function to change the turn
const changeTurn = ()=>{
    
     return turn === "X"?"0": "X"
}

// function to check for a win 
const checkWin = ()=>{
    let boxtext  = document.getElementsByClassName("boxtext");
    let Wins  =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8,],
    ]
    Wins.forEach(e=>{
      if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
        document.querySelector(".info").innerText = boxtext[e[0]].innerText + " WON "
        isgameover=true
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "250px"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
      }
})
    
}

// Game logic 
music.play();
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "turn for  "+turn
            }


        }
    })
})

// Add onclick listener to reset button 
 reset.addEventListener('click',()=>{
let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element =>{
    element.innerText=""
});
turn = "X"
isgameover=false
document.getElementsByClassName("info")[0].innerText = "turn for  "+turn
document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width ='0px'


 })