import { useMemo, useState } from 'react'
import { type Sucursales } from '../types/sucursal'

interface FilterItems {
  filteredItems: Sucursales
  searchPDV: string
  setSearchPDV: React.Dispatch<React.SetStateAction<string>>
  searchCate: string
  setSearchCate: React.Dispatch<React.SetStateAction<string>>
}

function filterByPDV (items: Sucursales, searchPDV: string): Sucursales {
  return items.filter(({ PDV_NOMBRE, PDV_SUCURSAL }) =>
    PDV_NOMBRE.toLowerCase().includes(searchPDV.toLowerCase()) ||
    PDV_SUCURSAL.toString().toLowerCase().includes(searchPDV.toLowerCase())
  )
}

function filterByCate (items: Sucursales, searchCate: string): Sucursales {
  return items.filter(({ PDV_CATE }) =>
    PDV_CATE.toLowerCase().includes(searchCate.toLowerCase())
  )
}

export function useFilter (items: Sucursales): FilterItems {
  const [searchPDV, setSearchPDV] = useState('')
  const [searchCate, setSearchCate] = useState('')

  const filteredItems = useMemo(() => {
    let filtered = filterByPDV(items, searchPDV)
    filtered = filterByCate(filtered, searchCate)
    return filtered
  }, [items, searchPDV, searchCate])

  return { searchPDV, setSearchPDV, filteredItems, setSearchCate, searchCate }
}
