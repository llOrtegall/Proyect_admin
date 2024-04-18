import { Card, Button, Dialog, DialogPanel, CategoryBar } from '@tremor/react'

import React from 'react'

export function CardUsage ({ cumplimiento, porcentaje }: { cumplimiento: string, porcentaje: string }): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
        <section className="flex justify-center">

            <Card
                className="transition hover:scale-110 max-w-3xl mt-10 shadow-rose-700 hover:bg-slate-50"
                decoration="top"
                decorationColor="red"
                onClick={() => { setIsOpen(true) }}
            >
                <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{cumplimiento}</p>
                <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje}</p>
            </Card>
            <Dialog open={isOpen} onClose={(val) => { setIsOpen(val) }} static={true}>
                <DialogPanel>
                    <CategoryBar
                        className='mt-1'
                        values={[40, 30, 20, 10]}
                        colors={['emerald', 'yellow', 'orange', 'rose']}
                        markerValue={70}
                    />
                    <Button className="mt-8 w-full" onClick={() => { setIsOpen(false) }}>
                        Close
                    </Button>
                </DialogPanel>
            </Dialog>

        </section>
  )
}
