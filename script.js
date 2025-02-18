let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-btn")
let newgamebtn = document.querySelector("#new-btn")
let msgcont = document.querySelector(".msg-cont")
let msg  = document.querySelector("#msg")
let turn0 = true;
let count =0;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = ()=>{
    turn0 = true;
    enableboxes();
    msgcont.classList.add("hide")
    count=0;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            // console.log("o")
            box.innerText ="O";
            box.style.color=" palevioletred";
            turn0= false
            count++;
        }
        else{ 
            // console.log("x");
            box.innerText ="X";
            box.style.color="rgb(122, 67, 67)";
            turn0=true;
            count++;
        }
    console.log("count :",count)
    checkdraw(count);
    box.disabled = true;
    checkwinner();
    })
    // console.log(box)
})
const checkdraw=(count)=>{
    if(count===9){
        msg.innerText = `It's a Draw`;
        msgcont.classList.remove("hide")
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
} 
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    }
} 
const displaywinner =(winner)=>{
    msg.innerText = ` Congratulations. Winner is  ${winner}`
    msgcont.classList.remove("hide")
}
const checkwinner = ()=>{
    let winner = false;
    for(let pattern  of winpattern){
        let posval1 =boxes[pattern[0]].innerText
        let posval2 =boxes[pattern[1]].innerText
        let posval3 =boxes[pattern[2]].innerText
        if(posval1!="" && posval2 !="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                console.log("Winner is : ", posval1)
                disableboxes();
                displaywinner(posval1);

            }
        }
    }
}
newgamebtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)

