interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <button className="p-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-700">
      {children}
    </button>
  )
}
