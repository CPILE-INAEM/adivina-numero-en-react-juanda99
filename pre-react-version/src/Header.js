import './Header.css'

export default function Header(props) {

  console.log(`Las propiedades del componente Header son: ${JSON.stringify(props)}`)
  return (
    <h1 className='titulo'>{props.titulo}</h1>
  )
}
