
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'


function Home() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Consuming the ASP.NET Pizza API with React</h1>
      <h2>(lol, get it?)</h2>

      <Link to="/pizzas">
        <button style={{ margin: '10px' }}>SEE PIZZAS</button>
      </Link>
      <Link to="/pasta">
        <button style={{ margin: '10px' }}>SEE PASTA</button>
      </Link>
    </>
  )
}

export default Home