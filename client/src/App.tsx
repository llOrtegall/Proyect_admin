import { Route, Routes } from 'react-router-dom'

function App (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/" element={<h1>Home Navbar</h1>} />
      </Routes>
    </>
  )
}

export default App
