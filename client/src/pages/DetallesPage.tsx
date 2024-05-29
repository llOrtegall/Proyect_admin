import { Select, SelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { RiNumbersLine, RiDatabase2Fill, RiArrowUpSFill, RiArrowDownSFill } from '@remixicon/react'
import { type Sucursales } from '../types/sucursal'
import { Input, Label } from '../components/iu'
import { useFilter } from '../hooks/useFilters'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../auth/AuthProvider'

const DetallesPage = (): JSX.Element => {
  const [data, setData] = useState<Sucursales>([])

  const { user } = useAuth()
  const company = user.empresa

  const { filteredPDV, searchCate, searchPDV, setSearchCate, setSearchPDV, handleClick, asc } = useFilter(data)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await axios.get(`http://localhost:3000/api/sucursal/${company === 'Servired' ? '39628' : '39627'}`)
      setData(response.data as Sucursales)
    }

    // Llama a fetchData inmediatamente y luego cada 5 minutos
    void fetchData()
    const intervalId = setInterval(fetchData, 5 * 60 * 1000)

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>

      <section className='bg-blue-200 p-2 flex justify-around items-center'>

        <section className='text-center gap-2 flex items-center'>
          <Label>Filtrar PDVS:</Label>
          <Input value={searchPDV} onChange={ev => { setSearchPDV(ev.target.value) }} placeholder='38656 | Punto Principal ...' />
        </section>

        <section className='text-center gap-2 flex items-center'>
          <Label>Categorías:</Label>
          <Select className='w-min' placeholder='Seleccionar Categoría' value={searchCate} onValueChange={setSearchCate}>
            <SelectItem className='flex justify-around cursor-pointer' value="">TODAS</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="DIAMANTE">DIAMANTE</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="ZAFIRO">ZAFIRO</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="ORO">ORO</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="PLATA">PLATA</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="BRONCE">BRONCE</SelectItem>
          </Select>
        </section>

        <section className='text-center flex gap-2 items-center'>
          <Label>N° Logins:</Label>
          <h1 className='font-bold'>{data.length}</h1>
        </section>

        <section className='text-center gap-2 flex items-center'>
          <Label>Mostrar:</Label>
          <Select className='' placeholder='Todos'>
            <SelectItem className='flex justify-around cursor-pointer' value="" icon={RiDatabase2Fill}>Todos</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="10" icon={RiNumbersLine}>10</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="20" icon={RiNumbersLine}>20</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="50" icon={RiNumbersLine}>50</SelectItem>
            <SelectItem className='flex justify-around cursor-pointer' value="30" icon={RiNumbersLine}>100</SelectItem>
          </Select>
        </section>

      </section>

        <Table>
          <TableHead>
            <TableRow className='bg-blue-100 dark:bg-dark-tremor-brand-muted'>
              <TableHeaderCell className='text-center'>Sucursal</TableHeaderCell>
              <TableHeaderCell className='text-center'>Categoría</TableHeaderCell>
              <TableHeaderCell className='text-center'>Nombre</TableHeaderCell>
              <TableHeaderCell className={`text-center flex items-center cursor-pointer select-none hover:text-blue-600 ${asc ? '' : 'text-blue-600'}`}
                onClick={handleClick}>{asc ? <RiArrowDownSFill /> : <RiArrowUpSFill />} <span>Cum. Chance</span>
              </TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Recargas</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Astro</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Betplay</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Recaudos</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Raspe</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              filteredPDV.map(pdv => {
                return (
                  <TableRow key={pdv.PDV_SUCURSAL}>
                    <TableCell className='text-center'>{pdv.PDV_SUCURSAL}</TableCell>
                    <TableCell className='text-center'>{pdv.PDV_CATE}</TableCell>
                    <TableCell className='text-center'>{pdv.PDV_NOMBRE}</TableCell>
                    <TableCell className='text-center'>$ {pdv.CHANCE}</TableCell>
                    <TableCell className='text-center'>$ {pdv.RECARGAS}</TableCell>
                    <TableCell className='text-center'>$ {pdv.ASTRO}</TableCell>
                    <TableCell className='text-center'>$ {pdv.BETPLAY}</TableCell>
                    <TableCell className='text-center'>$ {pdv.RECARGAS}</TableCell>
                    <TableCell className='text-center'>$ {pdv.RECAUDOS}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>

    </>
  )
}

export default DetallesPage
