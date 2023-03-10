const FlashCards = document.getElementById("Flash-cards")[0];
const boxContainer = document.getElementsByClassName("box-container")[0];
const Question = document.getElementById("question");
const Answer = document.getElementById("answer");

let contentArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : []  

contentArray.forEach(creatorBox);
function creatorBox(text){
let div = document.createElement('div');
let h2Quetion = document.createElement('h2');
let h2Answer = document.createElement('h2');
div.className = 'Flash-card' ;
h2Quetion.setAttribute('style' , 'border-top:1px solid red ; padding:15px ; margin-top:30px');
h2Quetion.innerHTML = text.myQuetion ;
h2Answer.setAttribute('style' , 'text-align:center ; display:none ; color:red');
h2Answer.innerHTML = text.myAnswer ;
div.appendChild(h2Answer);
div.appendChild(h2Quetion);
FlashCards.appendChild(div);
div.addEventListener('click' , function(){
    if(h2Answer.style.dispaly == "none"){
        h2Answer.style.dispaly = "block";
    }else{
        h2Answer.style.dispaly = "none" ;
    }
})
}

function delCards(){
    localStorage.clear();
    FlashCards.innerHTML = "";
    contentArray = [] ;

}

function closeFlashCard(){
    boxContainer.style.display = 'none';
}

function newCards(){
   boxContainer.style.display = 'block';
}

function saveFlashCard(){
   var ItemflashCard = {
    'myQuetion' : Question.value,
    'myAnswer' : Answer.value
   }
   contentArray.push(ItemflashCard);
   localStorage.setItem('items' , JSON.stringify(contentArray));
   creatorBox(contentArray[contentArray.length - 1 ]);
   Question.value = "";
   Answer.value = ''
}

