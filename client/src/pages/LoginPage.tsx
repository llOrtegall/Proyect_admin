import { Input, Button } from '../components/iu'
import { useAuth } from '../auth/AuthProvider'
import React, { useState } from 'react'
import axios from 'axios'
import { UserIcon } from '../components/iu/userIcon'
import { LockIcon } from '../components/iu/LockIcon'
import { Error } from '../components/iu/error'

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
          // TODO: Montamos al local storage el token de la response, tener en cuenta el el nombre 'token'
          const token: string = res.data.token
          localStorage.setItem('token', token) // * <==============
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
      <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-10 shadow-xl' onSubmit={(ev) => { handleSubmit(ev) }}>

        <article className='w-full flex flex-col '>
          <label className="flex justify-center uppercase font-bold ">Usuario </label>
          <div className='flex justify-center'>
            <UserIcon />
            <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username' value={user}
              onChange={(ev) => { setUser(ev.target.value) }} />
          </div>
        </article>

        <article className='w-full flex flex-col '>
          <label className="flex justify-center uppercase font-bold">contraseña</label>
          <div className='flex justify-center w-'>
            <LockIcon />
            <Input name='contraseña' type='password' placeholder='***********' autoComplete='contraseña' value={password}
              onChange={(ev) => { setPassword(ev.target.value) }} />
          </div>
        </article>

        <article className='flex flex-col items-center justify-center '>
          <Button>Iniciar Sesión</Button>
        </article>

      </form >

      <Error errorString={errorString} />

    </section >
  )
}

export default LoginPage
