import { ProtectedRoute } from './components/ProtectedRoutes'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'

function App (): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route element={<ProtectedRoute isAllowed={true} />}>
          <Route path="/" element={<Home />} />
          <Route path='/example1' element={<h1>Example 1</h1>} />
          <Route path='/example2' element={<h1>Example 2</h1>} />
          <Route path='/example3' element={<h1>Example 3</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
