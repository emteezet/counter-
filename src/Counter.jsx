

const display = document.getElementById("displayCounter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;


increaseBtn.onclick = function () {
    count++;
    display.innerHTML = count;
}

decreaseBtn.onclick = function () {
    count--;
    display.innerHTML = count;
}


resetBtn.onclick = function () {
    count= 0;
    display.innerHTML = count;
}
function Counter (){


    return (
        
        
        <div className="counterBox">
        <label id="displayCounter">0</label>
        <div className="btns">
        <button id="increaseBtn">+</button>
        <button id="resetBtn">Reset</button>
        <button id="decreaseBtn">-</button>
        </div>
        </div>

    );
}

export default Counter