import OptionRules from "../OptionRules/OptionsRules"
import OneMinuteRules from "../Rules/OneMintueRules"

function GameRules(){
   return(
      // rules for the various game option
      <div className="gameRules_block">
       <OneMinuteRules/>
       <OptionRules/>
      </div>
   )
}
export default GameRules