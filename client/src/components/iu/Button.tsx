interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button ({ children, ...props }: Props): JSX.Element {
  return (
    <button type="submit" className="p-2 w-40 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-700" {...props}>
      {children}
    </button>
  )
}
