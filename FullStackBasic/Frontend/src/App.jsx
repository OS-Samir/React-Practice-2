import React from 'react'

const App = () => {
  const [jokes, setJokes] = useState([])
  return (
    <div>
      <h1>Full stack</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map(()=> {
          
        })
      }
    </div>
  )
}

export default App
