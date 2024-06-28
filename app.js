const p1b = document.querySelector('#p1b');
const p2b = document.querySelector('#p2b');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const body = document.querySelector('#container');
const range = document.querySelector('#range');
const select = document.querySelector('#gamePoint');

let i = 0;
let j = 0;
let winningScore = 3;
let isGameOver = false;


p1b.addEventListener('click', function(){
    if(!isGameOver){
        ++i;
        if(i === winningScore){
            isGameOver = true;
            p1.classList.add('winner');
            p2.classList.add('loser');
        }
        p1.textContent = `${i}`;
    }
    
});

p2b.addEventListener('click', function(){
    if(!isGameOver){
        ++j;
        if(j === winningScore){
            isGameOver = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
        }
        p2.textContent = `${j}`;
    }
});

select.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetGame();
});

reset.addEventListener('click', resetGame);

function resetGame(){
    isGameOver = false;
    p1.textContent = 0;
    p2.textContent = 0;
    i=0;
    j=0;
    p1.classList.remove('winner', 'loser');
    p2.classList.remove('winner', 'loser');
}