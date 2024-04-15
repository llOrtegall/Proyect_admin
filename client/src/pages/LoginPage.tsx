import React, { useState } from 'react'
import { Input, Button } from '../components/iu'
import { useAuth } from '../auth/AuthProvider'
import axios from 'axios'
import { WarningIcon } from '../components/iu/warning'

function LoginPage (): JSX.Element {
  const { login } = useAuth()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorString, setErrorString] = useState('')

  const handleSubmit = (ev: React.FormEvent): void => {
    ev.preventDefault()

    void axios.post('http://172.20.1.216:4000/api/login', { user, password })
      .then(res => {
        if (res.data?.auth === true) {
          login()
        }
      })
      .catch(error => {
        const errorString: string = error.response.data.message
        setErrorString(errorString)
        setTimeout(() => {
          setErrorString('')
        }, 5000)
      })
  }

  return (
    <section className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-200">
      <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl' onSubmit={(ev) => { handleSubmit(ev) }}>

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
            <Input name='contraseña' type='password' placeholder='***********' autoComplete='contraseña' value={password}
              onChange={(ev) => { setPassword(ev.target.value) }} />
          </div>
        </article>
        <Button>Iniciar Sesión</Button>
      </form >

      {(errorString !== '') &&
        <div className='flex gap-2'>
          <p className="text-center bg-red-600 text-white font-semibold p-2 rounded-md">
            <WarningIcon />
          </p>
          <p className="text-center bg-red-600 text-white font-semibold p-2 rounded-md">
            {errorString}
          </p>
        </div>
      }

    </section >
  )
}

export default LoginPage
