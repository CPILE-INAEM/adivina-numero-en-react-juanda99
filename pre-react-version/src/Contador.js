import { useState } from 'react'

export default function Contador() {

  const [count, setCount] = useState(5)

  const aumentarContador = () => setCount(count + 1)

  const disminuirContador = () => setCount(count - 1)


  return (
    <div>
      <p>Contador</p>
      <button onClick={aumentarContador}>Incrementar</button>
      <button onClick={disminuirContador}>Disminuir</button>
      <p>El contador vale {count} </p>
    </div>
  )
}
