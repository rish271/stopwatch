import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  useEffect(() => {
    let timer
    if (start === true) {
      timer = setInterval(() => {
        setTime(time + 1)
      }, 1000)
    } else {
      setStart(false)
    }
    return () => clearInterval(timer)
  }, [time, start])
  const handleStart = () => {
    setStart(true)
  }
  const handlePause = () => {
    setStart(false)
  }
  const handleReset = () => {
    setStart(false)
    setTime(0)
  }
  return (
    <>
      {<h1>{time}</h1>}
      <button onClick={handleStart}>start</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handlePause}>pause</button>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
