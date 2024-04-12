interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function Button ({ children, onClick }: ButtonProps): JSX.Element {
  return (
      <button type="submit" className="p-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-700" onClick={onClick}>
      {children}
    </button>
  )
}
