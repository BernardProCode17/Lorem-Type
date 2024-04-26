function OptionRules(){
   // game rules for Options
   return(
      <div className="gameRules_options">
         <h3 className="options_title">Options</h3>
         <div className="option_time">
            <h5 className="option_title">Time:</h5>
            <p className="option_description"><span className="option_description-emphasize">1 Minute</span> - 1 minute to complete the target amount of words</p>
            <p className="option_description"><span className="option_description-emphasize">Time Trail</span> - 5 minute to set the highest Score</p>
            <p className="option_description"><span className="option_description-emphasize">Highest Score </span> - Score your highest points posible </p>
         </div>

         <div className="option_words">
            <h5 className="option_title">Generated Words:</h5>
            <p className="option_description"><span className="option_description-emphasize">Lorem Ipsum</span> - Generate random Lorem Ipsum words</p>
            <p className="option_description"><span className="option_description-emphasize">Random Words</span> - Generate random words in a sentence</p>
            <p className="option_description"><span className="option_description-emphasize">Real Sentence</span> - Generate real words in real sentences</p>
         </div>
      </div>
   )
}
export default OptionRules