// type textProp = {
//    textData: string | string[]
// }
function TextArea(){
   return(
      <textarea cols="30" rows='10' className="textArea_container" style={{resize: 'none', margin: '3rem'}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Nemo, commodi error labore fuga sit maiores nisi voluptatibus corrupti. 
         Quam exercitationem explicabo ullam impedit illo totam quos 
         reprehenderit at velit porro.
      </textarea>
   )
}
export default TextArea;