import { DonutChartComp } from '../components/iu/DonutChart'
import { type Product } from '../types/metas'

import { useEffect, useState } from 'react'
import axios from 'axios'


const DashBoard = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/metas')
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <article className='lg:flex gap-2 mx-1'>
      <DonutChartComp products={products} />
    </article>
  )
}

export default DashBoard
