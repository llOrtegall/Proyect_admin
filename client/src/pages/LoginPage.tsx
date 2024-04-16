import { Input, Button } from '../components/iu'
import { UserIcon } from '../components/iu/userIcon'
import { LockIcon } from '../components/iu/LockIcon'
import { Error } from '../components/iu/error'
import { useLogin } from '../hooks/useLogin'

function LoginPage (): JSX.Element {
  const { user, setUser, password, setPassword, errorString, handleSubmit } = useLogin() // llama hook del login

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
