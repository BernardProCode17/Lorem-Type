import Header from "../components/Header"
import Main from "../components/Main"
import Section from "../components/Section"
import GameRules from "../components/Gamerules"

function App() {

  const gameRules:string = 'Game rules'
  const elementSelector:string = 'gameRules'
  
  return (
    <>
      <Header />
      <Main>
        <Section title={gameRules} Component={GameRules} elementSelector={elementSelector} titleClass='gameRules'/>
      </Main>
    </>
  )
}

export default App
