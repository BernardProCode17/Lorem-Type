function OneMinuteRules(){
   return(
      <ol className="gameRules_list">
         <li className="gameRules_listItems">Press the start button to begin the game</li>
         <li className="gameRules_listItems">When you start typing the timer will begin</li>
         <li className="gameRules_listItems">You will have <b className="OneMinute_bold">1 Minute</b> to type the target amount of words</li>      
         <li className="gameRules_listItems">When you complete a word correctly you get <b className="OneMinute_bold">5 Points</b></li>
         <li className="gameRules_listItems">When you complete all the words you complete the level </li>
         <li className="gameRules_listItems">If you get an error you get that word wrong</li>
         <li className="gameRules_listItems"> If you complete <b className="OneMinute_bold">80%</b> of the words correct you pass the level</li>
         <li className="gameRules_listItems">If you complete all the words with time remaining, you get <b className="OneMinute_bold">5 Points</b> for each remaining seconds</li>
         <li className="gameRules_listItems"> If you have time remaining when you complete the level, your time will be added to the next level</li>
         <li className="gameRules_listItems">When the game end or time is up your <b className="OneMinute_bold">Highest Score</b> will be added to the leaderboard</li> 
      </ol>
   )
}
export default OneMinuteRules;