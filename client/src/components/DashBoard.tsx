import { type Product } from '../types/metas'
import { type Empresa } from '../types/user'

import { useEffect, useState } from 'react'
import axios from 'axios'

const DashBoard = ({ company }: { company: Empresa }) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/metas')
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data.products)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <article className='lg:flex gap-2 mx-1'>

    </article>
  )
}

export default DashBoard
