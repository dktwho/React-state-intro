
import { useState } from 'react'
import React from 'react'

const App2 = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

function incr() {
  setCount2(count2 + 1)
}
function decr() {
  setCount2(count2 - 1)
}
function rest() {
  setCount2(0)
}
  return (
    <div className='App'>
     Counter : {count}
     <button onClick={() => setCount(count + 1)}>Increment</button>
     <button onClick={() => setCount(count - 1)}>Decrement</button>
     <button onClick={() => setCount(0)}>Reset</button>
     <br />
     <br />
     <hr />
     <br />
     Counter: <b>{count2}</b>
     <button onClick={incr}>incr</button>
     <button onClick={decr}>decr</button>
     <button onClick={rest}>reset</button>

      
    </div>
  )
}

export default App2
