// some variables for frequent use
const wrapper=document.querySelector('#wrapper');
const  winnerPage=document.querySelector('#winner');
const boxes=document.querySelectorAll('.picture');
const gamePanel=document.querySelector('.gamePanel');
const resultPanel=document.querySelector('.resultPanel');
const userPick=document.querySelector('#img4');
const computerPick=document.querySelector('#img5');
const img=document.createElement('img');
//arry for computer choices
let array=["scissors","rock","paper"];
for(let index=0; index<boxes.length; index++){
    // Event Listeners on every picture ==> "scissors","rock","paper"
    boxes[index].addEventListener("click",(e)=>{
    const userChoice=boxes[index].id;
    // random function we are useing to choose Computer-choice
    const computerChoice=array[Math.floor(Math.random()*3)];
    const userImg=boxes[index].src;
    const compImg=document.querySelector(`#${computerChoice}`).src;

    if((userChoice=="scissors" && computerChoice=="rock")|| (userChoice=="rock" && computerChoice=="paper")|| (userChoice=="paper" && computerChoice=="scissors")){
        //computer  win
        document.querySelector('.wrapper').append(resultPanel);
        const computer_score =document.querySelector("#computer_score");
        // scores we are saving
         computer_score.innerHTML=Number( computer_score.innerHTML)+1;
        //  giving Images to user & Computer 
         userPick.src=userImg;
         computerPick.src=compImg;
        //   adding Gradient for winner
         document.querySelector('#computerPick').classList.add("grad");
         document.querySelector('#resultStatement').innerHTML='You Lost';
         resultPanel.style.visibility='visible';
         gamePanel.remove();
    }
    else if((userChoice=="paper" && computerChoice=="rock")|| (userChoice=="scissors" && computerChoice=="paper")|| (userChoice=="rock" && computerChoice=="scissors")){ 
        // user win
        document.querySelector('.wrapper').append(resultPanel);
        const your_score =document.querySelector("#your_score");
        // scores we are saving
        your_score.innerHTML=Number(your_score.innerHTML)+1;
        //  giving Images to user & Computer 
        userPick.src=userImg;
        computerPick.src=compImg;
    
        document.querySelector('#resultStatement').innerHTML='You Won';
        //   adding Gradient for winner
        document.querySelector("#userPick").classList.add("grad");
        resultPanel.style.visibility='visible';
        gamePanel.remove();
     }
    else{
        // no win
        document.querySelector('.wrapper').append(resultPanel);
        computerPick.src=compImg;
        userPick.src=userImg;

        document.querySelector('#resultStatement').innerHTML='Tied';
        resultPanel.style.visibility='visible';
        gamePanel.remove();
       
    }
   })
    
}

const rule_box=document.querySelector('.rule-box');
const rulesButton=document.querySelector('.rules');
// for rules section 
rulesButton.addEventListener('click',()=>{
if(rule_box.style.visibility=="visible"){
    rule_box.style.visibility="hidden";
}
else{
    rule_box.style.visibility="visible";
}
})
// for PlayAgain Button
const PlayAgain=document.querySelector('#PlayAgain');
PlayAgain.addEventListener('click',()=>{
    if(document.querySelector('#userPick').classList.contains('grad')){
        document.querySelector('#userPick').classList.remove('grad');
    }
   if(document.querySelector("#computerPick").classList.contains('grad')){
    document.querySelector('#computerPick').classList.remove('grad');
   }
    document.querySelector('.resultPanel').remove();
    document.querySelector('.wrapper').append(gamePanel);
    
})
     
document.querySelector('#X').addEventListener('click',()=>{
    document.querySelector('.rule-box').style.visibility='hidden';
   }) 
// next buttons clickEvent remoing the game screen and showing the Winning Statement
document.querySelector('.next').addEventListener('click',()=>{
   
        wrapper.remove();
        winnerPage.style.visibility="visible";
})
    
  


