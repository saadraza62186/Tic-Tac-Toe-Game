let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');

let turn0 = true;
let gameActive = true; 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (gameActive && box.innerText === "") { 
            if (turn0) {
                box.innerText = "O";
                turn0 = false;
            } else {
                box.innerText = 'X';
                turn0 = true;
            }
            checkWinner();
        }
    });
});


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('Winner: ' + pos1Val);
                alert('Winner: ' + pos1Val);
                
                gameActive = false; 
                return;
            }
        }
    }

  
    let allBoxesFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allBoxesFilled) {
        console.log('Draw');
        alert('Draw');
        
        gameActive = false;
    }
}


reset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";
    });
    turn0 = true;
    gameActive = true; x
});