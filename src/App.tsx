import { useState } from 'react'
import './styles/global.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-bold text-5xl text-violet-500">Hello world</h1>
      <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-violet-600'>Enviar</button>
    </>
  )
}

export default App
