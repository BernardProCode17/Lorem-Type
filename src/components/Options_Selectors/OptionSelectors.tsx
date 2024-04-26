// Option Selector props types
type OptionSelectorProps = {
   optionTitle: string;
   buttons: string[];
   elementClass: string;
}
function OptionSelector({ optionTitle, buttons, elementClass }: OptionSelectorProps) {

   return (
      <section className={`option_${elementClass}`}>
         <h3 className={`option_${elementClass}_h3`}>{optionTitle}</h3>
         {/* Buttons in the options Sections */}
         {buttons.map((button, index) =>(
         <button key={index} className={`option_button-${elementClass}`}>{button}</button>
         ))}
      </section>
   )
}
export default OptionSelector;