import { useState } from 'react'
import './App.css'
import SingleCard from './components/Singlecard'
import { useEffect } from 'react'

const cardImages = [
  { "src": "/img/Iron1.png", matched : false},
  { "src": "/img/Bronze1.png", matched : false},
  { "src": "/img/Silver1.png", matched : false},
  { "src": "/img/Gold1.png", matched : false},
  { "src": "/img/Platinum1.png", matched : false},
  { "src": "/img/Diamond1.png", matched : false},
  { "src": "/img/Ascendant1.png", matched : false},
  { "src": "/img/Immortal1.png", matched : false},
  { "src": "/img/Radiant.png", matched : false}
]

function App() { 

  const [card, setCard] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //Mengacak kartu
  const shuffleCard = () => {
    const shuffledCard = [...cardImages, ...cardImages] 
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

      setCard(shuffledCard)
      setTurns(0)
  }

  //Handle Pilihan
  const handleChoice = (card) => {
   choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }

  // Membandingkan kartu
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCard(prevCards => {
          return prevCards.map(card =>{
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurns()
      } else {
        resetTurns()
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(card)

  // Reset Pilihan

  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Matching Game</h1>
      <button onClick={shuffleCard}>New Game</button>

      <div className="card-grid">
        {card.map(card => (
          <SingleCard key={card.id} card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  )
}

export default App
