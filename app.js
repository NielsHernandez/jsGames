'use strict';

const card = document.querySelectorAll('.card');
const scoreElement = document.querySelector('.score');
const attempsElement = document.querySelector('.time');
const titleElement = document.querySelector('.title h1');
const buttonElement = document.getElementById('reset');
let score = 0;
let arrayWithSelections = [];
let selectionCout = 0;
let arrayWithElement = [];
let attemps = 8;

//generate ramdon cards

let randomCards = shuffleArray([1,2,3,4,1,2,3,4]);

for(let n = 0; n < card.length; n++){

    card[n].textContent = randomCards[n];
}


const resetProperties = function(arr){

    for(let i=0; i<arr.length; i++){

        arr[i].style.backgroundColor = '#433D8B';
        arr[i].classList.remove('disable-div');

    }

    scoreElement.textContent = 'Score 00';
    attempsElement.textContent = 'Attemps 6';
    titleElement.textContent = 'Find the Pairs';

}


buttonElement.addEventListener('click', function() {
   

   if(confirm("are you sure to restar")){

    resetProperties(card);

    score = 0;
 arrayWithSelections = [];
 selectionCout = 0;
 arrayWithElement = [];
 attemps = 6;




   }
   
});

//verify if the 2 pairs of selections are equal

const verifyPair = function(arr,arr2){

    console.log(arr, arr2);

//arr2[0].style.backgroundColor = 'white'; 
    
    //read array of elements
    if(arr[0] === arr[1]){
        arr2[0].style.backgroundColor = 'white'; 
        arr2[1].style.backgroundColor = 'white'; 

        arr2[0].classList.add('disable-div');
        arr2[1].classList.add('disable-div');

       
        return true;
        
    }else{

     
     
        return false;

    }





}
//console.log(card);

function readCardsData(){

for(let i = 0; i<card.length; i++){

    
    card[i].addEventListener('click', function(){

        //console.log(card[i].textContent);
        selectionCout++;

        arrayWithSelections.push(card[i].textContent);
        arrayWithElement.push(card[i]);

        
        card[i].style.backgroundColor = 'black'; 
        
        

        //console.log(verifyPair(arrayWithSelections));

        if(selectionCout===2){

            selectionCout=0;

            if(verifyPair(arrayWithSelections,arrayWithElement)){

                score += 10;
    
                scoreElement.textContent = 'Score '+score;
             
                attemps--;
    
            }else{

             

                    arrayWithElement[0].style.backgroundColor = '#433D8B'; 
                    arrayWithElement[1].style.backgroundColor = '#433D8B'; 
                    attemps--;
    
                
            }

            arrayWithSelections = [];
            arrayWithElement = [];


        }

        attempsElement.textContent = attemps;
        if(attemps === 0){
            titleElement.textContent = 'GAME OVER';

            document.querySelector('.gameover').style.display = 'block';
            
         
        }
        if(score === 40){

            titleElement.textContent = 'You won!';

        }

       

    })

}
//check what is inside the array



}

//radom cards

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }

   
return array;
}


readCardsData();
