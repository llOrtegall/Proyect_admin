interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input ({ ...props }: Props): JSX.Element {
  return (
    <input className='rounded-md border-none bg-gray-100 dark:bg-gray-200 outline-none dark:text-black placeholder:text-slate-700 w-full max-w-xs text-center  border p-1'
      {...props} />
  )
}
