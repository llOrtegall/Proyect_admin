import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './auth/AuthProvider.tsx'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
