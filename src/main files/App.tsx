import Header from "../components/Header"
import Main from "../components/MainElement"
import Section from "../components/Section"
import GameRules from "../components/GameRules_Options/GameRules_Main/Gamerules"
import OptionSelector from "../components/Options_Selectors/OptionSelectors"
import InfoDiv from "../components/GameDisplayInfo/infoDiv"
import {Context, GlobalContext} from "./GlobalContext"

// *Log* // 
import { log } from '../Personal library/library';

function App() {
  // Props components
  const OptionSelectorTime = () => <OptionSelector optionTitle={"Time"} buttons={['Time trial', '1 Minute', 'Highest Score']} elementClass="time" />
  const OptionSelectorWords = () => <OptionSelector optionTitle={"Generated Words"} buttons={['Lorem Ipsum', 'Random Words', 'Real Sentence']} elementClass="words" />
 
  return (
    <Context>
        <Header />
        <Main>
          <Section title={'Game rules'} Component={GameRules} elementSelector={'gameRules'} titleClass='gameRules' />
          <Section title={'Choose Options'} Component={[OptionSelectorTime, OptionSelectorWords]} elementSelector={'choose_options'} titleClass={'choose_options'} />
          <Section Component={InfoDiv} elementSelector={'displayInfo'} />
        </Main>
    </Context>

  )
}

export default App
