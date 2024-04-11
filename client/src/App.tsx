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
        <Route path='/example1' element={<h1>Example 1</h1>} />
        <Route path='/example2' element={<h1>Example 2</h1>} />
        <Route path='/example3' element={<h1>Example 3</h1>} />
      </Routes>
    </>
  )
}

export default App
