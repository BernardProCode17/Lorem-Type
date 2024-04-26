import { createContext } from "react";


const GlobalContext = createContext();

//Prop Type
type contextprop = {
   children: React.ReactNode;
}
function Context({ children }: contextprop) {

   
   function Timer() {
      let minute: number = 60; 
      
      // CountDown Timer
      function CountDown():void {
         if (minute >= 0) {
            minute--
         }   
      }
      setInterval(CountDown, 1000)

      // timer Display
      function timerDisplay(){
      return `${setInterval(CountDown, 1000)} sec`
      }

      return timerDisplay() 
   }  

   return (
      <GlobalContext.Provider value={{Timer}}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

