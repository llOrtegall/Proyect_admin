interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button ({ children, ...props }: Props): JSX.Element {
  return (
    <button type="submit" className="p-2 w-full bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/50" {...props}>
      {children}
    </button>
  )
}
