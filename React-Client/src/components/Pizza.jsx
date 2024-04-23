import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Pizza() {

  const [pizza, setPizza] = useState([])

  useEffect(() => {
    const getPizza = async () => {
      try {
        const { data } = await axios.get('http://localhost:5105/pizzas')
        console.log('DATA => ', data)
        setPizza(data)
      } catch (err) {
        console.log(err.message)
      }
    }
    getPizza()
  }, [])

  return (
    <>
      {pizza.map(pizza => {
        const { id, name, description } = pizza
        return (
          <div key={id}>
            <h3>Pizza {id}:</h3>
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

export default Pizza