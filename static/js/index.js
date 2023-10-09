let turn = 'x';
let players = document.querySelectorAll('.players p'); // get player turn--
let boxes = [];
let container = document.querySelector('.container');
let winnerPlayer = document.querySelector('.celebrate h4');
let resetBtn = document.querySelector('.celebrate button');
let celebrateDiv = document.querySelector('.celebrate');



// resetBtn
resetBtn.addEventListener('click', () => {
    window.location.reload();
});


// celebrate function
function celebrate(num1 , num2 , num3) {
    let winBox1 = document.getElementById('box' + num1);
    let winBox2 = document.getElementById('box' + num2);
    let winBox3 = document.getElementById('box' + num3);

    winBox1.style.background = '#273c75';
    winBox2.style.background = '#273c75';
    winBox3.style.background = '#273c75';

    // to get the winner player
    if(winBox1.innerHTML == 'x'){
        container.style.cssText = 'filter: blur(5px);';
        celebrateDiv.style.display = 'block';
        winnerPlayer.innerHTML = 'player x';
    }
    else {
        container.style.cssText = 'filter: blur(5px);';
        celebrateDiv.style.display = 'block';
        winnerPlayer.innerHTML = 'player o';
    }
}






// winner player function---------------------
function winner() {
    // loop to check the winner----
    for(let i = 1; i < 10; i++) {
        boxes[i] = document.getElementById(`box${[i]}`).innerHTML;
    }

    // get x-line----
    if(boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[2] !== '') celebrate(1,2,3);
    else if(boxes[4] == boxes[5] && boxes[5] == boxes[6] && boxes[5] !== '') celebrate(4,5,6);
    else if(boxes[7] == boxes[8] && boxes[8] == boxes[9] && boxes[8] !== '') celebrate(7,8,9);
    
    // get y-line----
    else if(boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[4] !== '') celebrate(1,4,7);
    else if(boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[5] !== '') celebrate(2,5,8);
    else if(boxes[3] == boxes[6] && boxes[6] == boxes[9] && boxes[6] !== '') celebrate(3,6,9);
    
    // get cross line----
    else if(boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[5] !== '') celebrate(1,5,9);
    else if(boxes[3] == boxes[5] && boxes[5] == boxes[7] && boxes[5] !== '') celebrate(3,5,7);
}




// game function ------------------------------------------------------------------
function game(id) {
    // choose wanted box----
    let box = document.getElementById(id);

    // switch condition -------
    if(turn === 'x' && box.innerHTML === '') {
        box.innerHTML = 'x';
        turn = 'o';
        players.forEach(pl => {
            if(pl.classList.contains('active')) pl.classList.remove('active');
            else pl.classList.add('active');
        });
    }
    else if (turn === 'o' && box.innerHTML === '') {
        box.innerHTML = 'o';
        turn = 'x';
        players.forEach(pl => {
            if(pl.classList.contains('active')) pl.classList.remove('active');
            else pl.classList.add('active');
        });
    }
    winner();
}