import { type Sucursales } from '../types/sucursal'
import { useState } from 'react'

interface FilterItems {
  searchPDV: string
  setSearchPDV: React.Dispatch<React.SetStateAction<string>>
  filteredsPDV: Sucursales
  searchCategoria: string
  setSearchCategoria: React.Dispatch<React.SetStateAction<string>>
}

export function useFilter (items: Sucursales): FilterItems {
  const [searchPDV, setSearchPDV] = useState('')
  const [searchCategoria, setSearchCategoria] = useState('')

  console.log(searchCategoria)

  const filteredsPDV =
    items.filter(({ PDV_NOMBRE, PDV_SUCURSAL, PDV_CATE }) =>
      PDV_NOMBRE.toLowerCase().includes(searchPDV.toLowerCase()) ||
      PDV_SUCURSAL.toString().toLowerCase().includes(searchPDV.toLowerCase()) ||
      PDV_CATE.toLowerCase().includes(searchCategoria.toLowerCase())
    )

  return { searchPDV, setSearchPDV, filteredsPDV, searchCategoria, setSearchCategoria }
}
