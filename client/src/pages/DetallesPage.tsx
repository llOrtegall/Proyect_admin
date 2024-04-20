import { Card, Select, SelectItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { RiNumbersLine, RiDatabase2Fill } from '@remixicon/react'
import { type Sucursales } from '../types/sucursal'
import { Input, Label } from '../components/iu'
import { useFilter } from '../hooks/useFilters'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DetallesPage = (): JSX.Element => {
  const [data, setData] = useState<Sucursales>([])

  const { filteredsPDV, searchPDV, setSearchPDV } = useFilter(data)

  useEffect(() => {
    void axios.get('http://localhost:3000/api/sucursales')
      .then((response) => { setData(response.data as Sucursales) })
  }, [])

  return (
    <>
      <section className='flex items-center gap-2 bg-blue-200 dark:bg-dark-tremor-brand-muted dark:text-white fixed z-50 right-10 mt-1 p-2 px-8 rounded-lg'>
        <Label>Mostrar:</Label>
        <Select className='w-min'>
          <SelectItem className='flex justify-around cursor-pointer' value="10" icon={RiNumbersLine}>10</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="20" icon={RiNumbersLine}>20</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="30" icon={RiNumbersLine}>50</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="30" icon={RiNumbersLine}>100</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="30" icon={RiDatabase2Fill}>Todos</SelectItem>
        </Select>
      </section>

      <section className='flex items-center gap-2 bg-blue-200 dark:bg-dark-tremor-brand-muted dark:text-white fixed z-50 left-6 mt-1 p-2 px-8 rounded-lg'>
        <Label>Filtrar PDVS:</Label>
        <Input value={searchPDV} onChange={ev => { setSearchPDV(ev.target.value) }} placeholder='38656 | Punto Principal ...' />
      </section>

      <section className='flex items-center gap-2 bg-blue-200 dark:bg-dark-tremor-brand-muted dark:text-white fixed z-50 left-[390px] mt-1 p-2 px-8 rounded-lg'>
        <Label>Categorías:</Label>
        <Select className='w-min'>
          <SelectItem className='flex justify-around cursor-pointer' value="TODAS">TODAS</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="DIAMANTE">DIAMANTE</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="ZAFIRO">ZAFIRO</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="ORO">ORO</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="PLATA">PLATA</SelectItem>
          <SelectItem className='flex justify-around cursor-pointer' value="BRONCE">BRONCE</SelectItem>
        </Select>
      </section>

      <Card>
        <Table className="mt-12">
          <TableHead>
            <TableRow className='bg-blue-100 dark:bg-dark-tremor-brand-muted'>
              <TableHeaderCell className='text-center'>Sucursal</TableHeaderCell>
              <TableHeaderCell className='text-center'>Categoría</TableHeaderCell>
              <TableHeaderCell className='text-center'>Nombre</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Chance</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Recargas</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Astro</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Betplay</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Recaudos</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Raspe</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              filteredsPDV.map(pdv => {
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
      </Card>
    </>
  )
}

export default DetallesPage
