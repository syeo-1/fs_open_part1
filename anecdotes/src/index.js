import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//const Button = (props) => {
//
//}

const Header = ({text}) => <h1>{text}</h1>

const SelectedAnecdote = ({anecdote}) => (
  <p>{anecdote}</p>
)

const VoteData = ({numVotes}) => (
  <p>has {numVotes} votes</p>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const FavAnecdote = ({data}) => (
  <div>
    <p>{data[0]}</p>
    <p>{data[1]}</p>
  </div>
) 

const App = (props) => {
  const getRandomVal = () => Math.floor(Math.random()*anecdotes.length)
  const nextAnecdote = () => setSelected(getRandomVal())
  const castVote = (i) => { 
    const copy = [...points]
    copy[i] += 1
    setPoints(copy)
  } 
  
  const randomVal = getRandomVal()//must initialize func before usage!
  const [selected, setSelected] = useState(randomVal)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  function getFavAnecdote() {
    const maxIndex = getMaxIndex()
    return [anecdotes[maxIndex], points[maxIndex]]
  }
  function getMaxIndex() {
    const maxVotes = Math.max(...points)
    for (let i = 0 ; i < points.length ; i++) {
      if (points[i] === maxVotes) return i
    }
  }
  

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <SelectedAnecdote anecdote={props.anecdotes[selected]}/>
      <VoteData numVotes={points[selected]}/>
      <Button onClick={() => castVote(selected)} text="vote"/>
      <Button onClick={nextAnecdote} text="next anecdote"/>
      <Header text="Anecdote with most votes" />
      <FavAnecdote data={getFavAnecdote()} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)