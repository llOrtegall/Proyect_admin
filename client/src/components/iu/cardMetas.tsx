import React from 'react'
import { Card, Button, Dialog, DialogPanel, CategoryBar } from '@tremor/react'

export function CardMetas ({ nombre, venta }: { nombre: string, venta: string }): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <section className="flex justify-center">
      {[1, 2].map((index) => (
        <><Card
              key={index}
              className="-translate-x-50 transition hover:scale-110 max-w-80 mt-6 ml-6 shadow-rose-700 hover:bg-slate-50"
              decoration="top"
              decorationColor="red"
              onClick={() => { setIsOpen(true) } }
          >
              <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{nombre}</p>
              <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{venta}</p>
          </Card>
          <Dialog open={isOpen} onClose={(val) => { setIsOpen(val) } } static={true}>
                  <DialogPanel>
                      <CategoryBar
                          className='mt-1'
                          values={[40, 30, 20, 10]}
                          colors={['emerald', 'yellow', 'orange', 'rose']}
                          markerValue={70} />
                      <Button className="mt-8 w-full" onClick={() => { setIsOpen(false) } }>
                          Close
                      </Button>
                  </DialogPanel>
              </Dialog></>
      ))}
    </section>
  )
}
