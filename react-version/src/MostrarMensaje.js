import './MostrarMensaje.css'
export default function MostrarMensaje({ number, secretNumber }) {
  console.log('Renderizando MostrarMensaje')
  console.log(number, typeof number, secretNumber, typeof secretNumber)
  if (secretNumber === number) {
    return <p className="message">🎉 Has acertado</p>
  } else if (number === '') {
    return <p className="message">Empezamos a jugar...</p>
  } else if (number > secretNumber) {
    return <p className="message">📉 El número secreto es más bajo</p>
  } else {
    return <p className="message">📈 El número secreto es más alto</p>
  }
}
