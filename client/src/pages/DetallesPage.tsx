import { RiFlag2Line } from '@remixicon/react'
import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { Input, Label } from '../components/iu'

const data = [
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 1,
    categoria: 'Bronce',
    name: 'P01 Principal',
    sucursal: 41412,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 2,
    categoria: 'Bronce',
    name: 'P02 Principal',
    sucursal: 41413,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 3,
    categoria: 'Bronce',
    name: 'P03 Principal',
    sucursal: 41414,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 4,
    categoria: 'Bronce',
    name: 'P04 Principal',
    sucursal: 41415,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  },
  {
    id: 5,
    categoria: 'Bronce',
    name: 'P05 Principal',
    sucursal: 41416,
    cumChance: 2000,
    cumRecargas: 1000,
    cumAstro: 500,
    cumBetplay: 200,
    cumRecaudos: 100,
    cumRaspe: 50,
    estado: 10
  }
]

const DetallesPage = (): JSX.Element => {
  return (
    <>
      <section className='flex w-96 items-center gap-2 bg-blue-200 fixed z-50 left-6 mt-1 p-2 px-8 rounded-lg'>
        <Label>Filtrar:</Label>
        <Input placeholder='Filtrado'/>
      </section>
      <Card>
        <Table className="mt-12">
          <TableHead>
            <TableRow className='bg-blue-100 dark:bg-dark-tremor-brand-muted'>
              <TableHeaderCell className='text-center'>Categoría</TableHeaderCell>
              <TableHeaderCell className='text-center'>Nombre</TableHeaderCell>
              <TableHeaderCell className='text-center'>Sucursal</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Chance</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Recargas</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Astro</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Betplay</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Recaudos</TableHeaderCell>
              <TableHeaderCell className='text-center'>Cum. Raspe</TableHeaderCell>
              <TableHeaderCell className='text-center'>Estado</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell className='text-center'>{item.categoria}</TableCell>
                    <TableCell className='text-center'>{item.name}</TableCell>
                    <TableCell className='text-center'>{item.sucursal}</TableCell>
                    <TableCell className='text-center'>$ {item.cumChance}</TableCell>
                    <TableCell className='text-center'>$ {item.cumRecargas}</TableCell>
                    <TableCell className='text-center'>$ {item.cumAstro}</TableCell>
                    <TableCell className='text-center'>$ {item.cumBetplay}</TableCell>
                    <TableCell className='text-center'>$ {item.cumRecaudos}</TableCell>
                    <TableCell className='text-center'>$ {item.cumRaspe}</TableCell>
                    <TableCell className='text-center'>
                      <Badge color="green" icon={RiFlag2Line}>
                        {item.estado}
                      </Badge>
                    </TableCell>
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
