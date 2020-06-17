import React from 'react'
import ReactDOM from 'react-dom'

// takes care of rendering name of the course
const Header = (props) => { 
  return (
    <h1>{props.name}</h1>
  )
}

// renders parts and their number of exercises
const Part = (props) => { 
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

// content for 1.4
const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

// renders total number of exercises
const Total = (props) => { 
  //return (
  //  <p>
  //    Number of exercises {props.total}
  //  </p>
  //)
  return (
    <p>
      Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
    </p>
  )
}

// combines content and total
// const combine

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
