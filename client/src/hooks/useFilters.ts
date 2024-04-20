import { type Sucursales } from '../types/sucursal'
import { useState } from 'react'

interface FilterItems {
  searchPDV: string
  setSearchPDV: React.Dispatch<React.SetStateAction<string>>
  filteredsPDV: Sucursales
}

export function useFilter (items: Sucursales): FilterItems {
  const [searchPDV, setSearchPDV] = useState('')

  const filteredsPDV =
  items.filter(({ PDV_NOMBRE, PDV_SUCURSAL }) =>
    PDV_NOMBRE.toLowerCase().includes(searchPDV.toLowerCase()) ||
    PDV_SUCURSAL.toString().toLowerCase().includes(searchPDV.toLowerCase())
  )

  return { searchPDV, setSearchPDV, filteredsPDV }
}
