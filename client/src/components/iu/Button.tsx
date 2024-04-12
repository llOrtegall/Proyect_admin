interface ButtonProps {
  children: React.ReactNode
}

export function Button ({ children }: ButtonProps): JSX.Element {
  return (
      <button type="submit" className="p-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-700">
      {children}
    </button>
  )
}
