import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('http://go-backend-service:8181/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial', padding: '40px' }}>
      <h1>React + Go</h1>
      <p>{msg}</p>
    </div>
  )
}

export default App