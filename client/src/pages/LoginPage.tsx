import { useState } from 'react'
import { Input, Button } from '../components/iu'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

function LoginPage (): JSX.Element {
  const { login } = useAuth()
  const [user, setUser] = useState(' ')
  const [password, setPassword] = useState(' ')
  const navigate = useNavigate()

  async function handleSubmit (): Promise<void> {
    try {
      const response = await axios.post('http://172.20.1.216:4040/login', { user, password })
      login()
      navigate('/home')
      console.log('Login response:', response.data)
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    }
  }

  return (
        <section className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-200">
            <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl' >

                <article className='w-full flex flex-col gap-2'>
                    <label className="flex justify-center uppercase">Usuario </label>
                    <div className='flex justify-center mb-2'>
                        <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username' value={user}
                            onChange={(ev) => { setUser(ev.target.value) }} />
                    </div>
                </article>

                <article className='w-full flex flex-col gap-2'>
                    <label className="flex justify-center uppercase ">contraseña</label>
                    <div className='flex justify-center mb-2'>
                        <Input name='contraseña' type='text' placeholder='***********' autoComplete='contraseña' value={password}
                            onChange={(ev) => { setPassword(ev.target.value) }} />
                    </div>
                </article>
                <Button onClick={handleSubmit}>Iniciar Sesión</Button>
            </form>
        </section>
  )
}

export default LoginPage
