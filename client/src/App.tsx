import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import NavBar from './components/NavBar'

function App (): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  )
}

export default App
