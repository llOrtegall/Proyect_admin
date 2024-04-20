import { type Sucursales } from '../types/sucursal'
import { useState } from 'react'

interface FilterItems {
  searchItems: string
  setSearchItems: React.Dispatch<React.SetStateAction<string>>
  filteredItems: Sucursales
}

export function useFilter (items: Sucursales): FilterItems {
  const [searchItems, setSearchItems] = useState('')

  const filteredItems =
  items.filter(({ PDV_NOMBRE, PDV_SUCURSAL }) =>
    PDV_NOMBRE.toLowerCase().includes(searchItems.toLowerCase()) ||
    PDV_SUCURSAL.toString().toLowerCase().includes(searchItems.toLowerCase())
  )

  return { searchItems, setSearchItems, filteredItems }
}
