import OptionRules from "./GameRules_Options/OptionsRules"
import OneMinuteRules from "./GameRules_Options/Rules/OneMintueRules"

function GameRules(){
   return(
      <div className="gameRules_block">
       <OneMinuteRules/>
       <OptionRules/>
      </div>
   )
}
export default GameRules