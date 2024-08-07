import React, {useState} from 'react'

const App = () => {
  const [jokes, setJokes] = useState([])
  return (
    <div>
      <h1>Full stack</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke, index)=> {
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
        })
      }
    </div>
  )
}

export default App
