import { useState, useEffect, useReducer } from "react"

import Card from "./components/card"
import CardResults from "./components/cardResults"

import CheckWinner from "./config/checkWinner"
import RenderComputer from "./config/renderComputer"
import RenderColor from "./config/renderColor"

import { Container, GameContainer, ComputerContainer, ResultContainer } from "./style"




const App = () => {

  const [match, setMatch] = useState()
  const [playerPicked, setPlayerPicked] = useState(0)
  const [computerPicked, setComputerPicked] = useState(1)
  const [victories, setVictories] = useState(0)
  const [defeats, setDefeats] = useState(0)
  const [ties, setTies] = useState(0)

  useEffect(() => {
    if(match != '') {
      return 
    }

    setTimeout(() => {
      setComputerPicked(Math.floor(Math.random(1) * 3) + 1)
    }, 100)
    clearTimeout(App)
  }, [playerPicked])


  useEffect(() => {
    if (playerPicked == 0) {
      setComputerPicked(0)
      return
    }

    setMatch(CheckWinner(playerPicked, computerPicked))
    setTimeout(() => {
      setComputerPicked(0)
      setPlayerPicked(0)
      setMatch('')
    }, 1600)
    clearTimeout(App)
  }, [computerPicked])

  useEffect(() => {
    if (match == '') {
      return
    }
    if (match === 'Você ganhou!') {
      setVictories(victories + 1)
    } else if (match === 'Você perdeu!') {
      setDefeats(defeats + 1)
    } else if (match === 'Deu empate!') {
      setTies(ties + 1)
    }
  }, [match])


  return (
    <Container>
      <GameContainer>
        <Card title='Pedra' onClick={() => setPlayerPicked(1)} />
        <Card title='Papel' onClick={() => setPlayerPicked(2)} />
        <Card title='Tesoura' onClick={() => setPlayerPicked(3)} />
      </GameContainer>
      <ComputerContainer>
        {
          computerPicked != 0 ? <Card title={RenderComputer(computerPicked)} /> : <p>Faça sua escolha:</p>
        }
      </ComputerContainer>
      <ResultContainer>
        <h1 style={{ color: RenderColor(match) }}>{match}</h1>
        <div className="table">
          <CardResults title={'Vitórias'} data={victories} />
          <CardResults title={'Derrotas'} data={defeats} />
          <CardResults title={'Empates'} data={ties} />
        </div>
      </ResultContainer>
    </Container>
  )
}

export default App
