import { Card, Button, Dialog, DialogPanel } from '@tremor/react'

import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function CardUsage () {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
        <section className="flex justify-center">

            <Card
                className="transition hover:scale-110 max-w-screen-sm mt-10"
                decoration="top"
                decorationColor="indigo"
                onClick={() => { setIsOpen(true) }}
            >
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
                <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
            </Card>
            <Dialog open={isOpen} onClose={(val) => { setIsOpen(val) }} static={true}>
                <DialogPanel>

                    <Button className="mt-8 w-full" onClick={() => { setIsOpen(false) }}>
                        Got it!
                    </Button>
                </DialogPanel>
            </Dialog>

        </section>
  )
}
