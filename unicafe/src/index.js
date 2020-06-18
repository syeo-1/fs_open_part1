import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.text}</h1>
}

const Button = ({handleClick, text}) => (//good neutral bad for buttons
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistic = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = ({good, neutral, bad, total, average, positivePercent}) => {
  if ((good + neutral + bad) === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="total" value={total}/>
      <Statistic text="average" value={average} />
      <Statistic text="Positive" value={positivePercent + " %"} />
    </div>
  )
}

const PositivePercent = (props) => (
  <p>{props.text} {props.number}%</p>
)

const App = () => {
  const giveFeedbackText = "give feedback"
  const statsText = "statistics"
  const [ratings, resetRatings] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const incrementGood = () => 
    resetRatings({ ...ratings, good: ratings.good+1 })
  
  const incrementNeutral = () => 
    resetRatings({ ...ratings, neutral: ratings.neutral+1 })

  const incrementBad = () => 
    resetRatings({ ...ratings, bad: ratings.bad+1 })
  
  return ( // what is useState()????!??! can be used for controlling state/incrementing?
    <div>
      <Header text={giveFeedbackText}/>
      <Button handleClick={incrementGood} text = "good"/>
      <Button handleClick={incrementNeutral} text = "neutral"/>
      <Button handleClick={incrementBad} text = "bad"/>
      <Header text={statsText} />
      <Statistics 
        good={ratings.good}
        neutral = {ratings.neutral}
        bad = {ratings.bad}
        total = {ratings.good+ratings.neutral+ratings.bad}
        average = {(ratings.good-ratings.bad)/(ratings.good+ratings.neutral+ratings.bad)}
        positivePercent = {(ratings.good/(ratings.good+ratings.neutral+ratings.bad))*100}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))