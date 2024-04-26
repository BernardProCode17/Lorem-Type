import { useContext } from 'react';
import { GlobalContext } from '../../main files/GlobalContext';
import Div from '../Div'
import GameDisplayInfo from "./GameDisplayInfo";

// Import functions from Global context to add to the prop
function InfoDiv(){

   const {Timer} = useContext(GlobalContext)
   return(
      <Div elementClass={'displayInfo_contanier'}>
         <GameDisplayInfo dspinfo={Timer()}/>
         <GameDisplayInfo dspinfo={'Words Display Info'}/>
         <GameDisplayInfo dspinfo={'Level Display Info'}/>
         <GameDisplayInfo dspinfo={'Points Display Info'}/>
         <GameDisplayInfo dspinfo={'Added Points Display info'}/>
      </Div>
   )
}
export default InfoDiv