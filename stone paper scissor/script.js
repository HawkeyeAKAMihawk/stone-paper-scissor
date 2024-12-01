let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = ()=>{
    //rock,paper,scissor
    
    const options = ["rock" ,"paper" ,"scissor"];
    const random  = Math.floor(Math.random()*3);
     return options[random];
}

const playgame = (userchoice)=>{
        console.log("user choice  : " , userchoice);
        const compchoice = gencompchoice();
        console.log("comp choice :" ,compchoice);

        if(userchoice===compchoice){
            drawgame();
        }

        else{
            let userwin = true;

            if(userchoice==="rock"){
                userwin = compchoice==="paper"? false: true;
            }

            else if(userchoice ==="paper"){
                userwin=compchoice==="scissor"? false :true;
            }

            else{
                userwin = compchoice==="rock"? false: true;
            }

           showwin(userwin,userchoice,compchoice);
        }


}

const showwin=(userwin,userchoice,compchoice)=>{

    if(userwin===true){
        console.log("user win");
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win : ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("comp win");
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`comp win :  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawgame = ()=>{
    console.log("draw game");
    msg.innerText="draw game";
    msg.style.backgroundColor = "yellow";
    msg.style.color="black";
}


choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
       
          const userchoice = choice.getAttribute("id");
          playgame(userchoice  );

    })
})