document.addEventListener("DOMContentLoaded", () => {
  //Inside span players score
  let player1score = document.getElementById("span0");
  let player2score = document.getElementById("span1");

  p1score = 0;
  p2score = 0;

  
  // Heading text who will be the current player
  let headingtext = document.getElementById("playerturn");

  //Button roll and restart button
  let rollbtn0 = document.getElementById("btn0");
  let rollbtn1 = document.getElementById("btn1");
  let restartbtn = document.getElementById("reset");

  rollbtn0.addEventListener("click", startgame);
  rollbtn1.addEventListener("click", startgame);

  restartbtn.addEventListener("click",startagain);


  function restart(){
    rollbtn0.style.display ="none";
    rollbtn1.style.display = "none";

    restartbtn.style.display = "inline-flex";
    
  }

  function startagain(){

    p1score = 0;
    p2score = 0;
    
    player1score.innerHTML = p1score;
    player2score.innerHTML = p2score;

     headingtext.innerHTML = "Game Restarts";

      rollbtn0.style.display = "block";
      rollbtn1.style.display = "block";

        rollbtn0.removeAttribute("disabled");
        rollbtn0.style.backgroundColor = "green";
        rollbtn1.removeAttribute("disabled");
        rollbtn1.style.backgroundColor = "green";
        
        restartbtn.style.display = "none";
      
  }

  function startgame(event) {
    turn = event.target.id;
    let random = Math.floor(Math.random() * 6) + 1;

        if (turn == "btn0" && p2score<=30) {
        p1score += random;
        player1score.innerHTML = p1score;

       
        rollbtn0.style.backgroundColor = "grey";
        rollbtn1.style.backgroundColor = "green";

        document.getElementById("btn0").setAttribute("disabled", " " );
        document.getElementById("btn1").removeAttribute("disabled");
        document.getElementById("rollimage").src = `Images/${random}.jpg`;
        
        if(p1score>=30){
          headingtext.innerHTML = "player 1 is the winner";
          document.getElementById("btn0").setAttribute("disabled" ,"");
          rollbtn0.style.backgroundColor = "grey";
          document.getElementById("btn1").setAttribute("disabled","");
          rollbtn1.style.backgroundColor = "grey";

          restart();

         }
         else{  
            headingtext.innerHTML = "Player 2 has to play";
         }
      }

       if(turn == "btn1" && p1score<=30){

        p2score += random;
        player2score.innerHTML = p2score;

        
        rollbtn1.style.backgroundColor = "grey";
        rollbtn0.style.backgroundColor = "green";
        

        document.getElementById("btn1").setAttribute("disabled", " ");
        document.getElementById("btn0").removeAttribute("disabled");
        document.getElementById("rollimage").src = `Images/${random}.jpg`;
         
        headingtext.innerHTML = "Player-1 has to play";    
        
         if(p2score>=30){
        headingtext.innerText = "player 2 is the winner";
        document.getElementById("btn0").setAttribute("disabled","");
        rollbtn0.style.backgroundColor = "grey";
        document.getElementById("btn1").setAttribute("disabled","");
        rollbtn1.style.backgroundColor = "grey";
        
        restart();
         
         }
         else{
          headingtext.innerHTML = "Player-1 has to play";    
          
         }
      }
     
    }
});