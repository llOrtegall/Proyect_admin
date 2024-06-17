import { type ProgressBarProps } from '@tremor/react'

export function DeterminarColor (porcentaje: number): ProgressBarProps['color'] {
  if (porcentaje < 20) {
    return 'red'
  } else if (porcentaje < 40) {
    return 'orange'
  } else if (porcentaje < 60) {
    return 'amber'
  } else if (porcentaje < 80) {
    return 'lime'
  } else if (porcentaje < 100) {
    return 'green'
  } else {
    return 'emerald'
  }
}
