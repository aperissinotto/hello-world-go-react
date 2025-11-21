import { useEffect, useState } from 'react'


function App() {
const [msg, setMsg] = useState('')


useEffect(() => {
fetch('http://backend:8080/api/hello')
.then(res => res.json())
.then(data => setMsg(data.message))
}, [])


return (
<div style={{ fontFamily: 'Arial', padding: '40px' }}>
<h1>React + Go</h1>
<p>{msg}</p>
</div>
)
}


export default App