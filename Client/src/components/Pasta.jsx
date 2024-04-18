import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Pasta() {

  const [pasta, setPasta] = useState([])

  useEffect(() => {
    const getPasta = async () => {
      try {
        const { data } = await axios.get('http://localhost:5105/pasta')
        console.log('DATA => ', data)
        setPasta(data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getPasta()
  }, [])

  return (
    <>
      {pasta.map(p => {
        const { id, name, description } = p
        return (
          <div key={id}>
            <h3>Pasta {id}:</h3>
            <p>{name}</p>
            <p>{description}</p>
          </div>
        )
      }
      )
      }
      <Link to="/">
        <button>GO BACK</button>
      </Link>
    </>
  )
}

export default Pasta