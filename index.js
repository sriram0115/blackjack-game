let first=getrandomcard()

let sum= first
let cards=[first]

let newcard =document.getElementById("cards")
let cardsEl =document.getElementById("cardsel")
let sumEl=document.getElementById("sumel")
let isalive=true
let blackjack=false
function startgame(){
    
    
    rendergame()
    
}
function rendergame(){
    cardsEl.innerText="CARDS:"
    sumEl.innerText="SUM:"+sum
    for(let i=0;i<cards.length;i++){
        cardsEl.innerText+=cards[i]+" - "
    }
    if(sum<21){
        newcard.innerText="want to draw one more?"
    }else if(sum===21)
    {
        newcard.innerText="BLACK JACK!!"
        blackjack=true
    } else{
        newcard.innerText="you lost!"
        isalive=false
    }
    
}
function puthucard(){
    if (isalive===true&&blackjack===false) {
        let newone=getrandomcard()
        sum=sum+newone
        cards.push(newone)
        rendergame() 
    }
    
    
}
function getrandomcard(){
    return Math.floor(Math.random()*13)+1
}

   


