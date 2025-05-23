const boxes = document.querySelectorAll(".box");
const reset_game = document.querySelector(".reset_game");
const win_msg = document.querySelector(".win_msg")

let turnO = true;

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

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    win_msg.innerText = "";
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        CheckWinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const ShowWinner = (winner) =>{
    win_msg.innerText = `Congratulation, Winner is ${winner}`
    disableBoxes();
}

const CheckWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                ShowWinner(pos1Val);
            }
        }

    }
};

reset_game.addEventListener("click", resetGame);