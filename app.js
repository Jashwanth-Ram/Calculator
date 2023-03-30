const buttons  = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let arr = [];
let val;

buttons.forEach((button)=>{button.addEventListener("click",()=>{calculate(button)})});
function calculate(button)
{
    const value = button.textContent;
    if(value=="CLEAR")
    {
        arr = [];
        screen.textContent = "0";
    }
    else if(value==="=")
    {
        screen.textContent = eval(val);
    }
    else{
        arr.push(value);
        val = arr.join('');
        screen.textContent  = val;
    }

}