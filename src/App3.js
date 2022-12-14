

import React from 'react'
import { useState } from 'react'


const App3 = () => {

  const [name,setName] = useState('Bob')
  const [surName,setSurName] = useState('Crowl')
  const [age,setAge] = useState(24)
  const [isBan, setIsBan] = useState(false)



  return (
    <div className='App'>
      {name} -   {surName} -  {age} {isBan ? <p>is banned</p> : <p>not banned</p> } <br />
    <button onClick={() => setName('Bill')}>changeName</button>
    <button onClick={() => setSurName('Cage')}>change surName</button>
    <button onClick={() => setAge(99)}>change age</button> <br />

    <button onClick={() => setAge(age + 1)}>age + 1</button>
    <button onClick={() => setAge(age - 1)}>age - 1</button> <br />


    {isBan ?  <button onClick={() => setIsBan(false)}>disban</button> :     <button onClick={() => setIsBan(true)}>ban</button> }
 
   

    

      
    </div>
  )
}

export default App3
