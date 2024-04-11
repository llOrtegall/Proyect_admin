import { Input, Button } from '../components/iu'

function LoginPage (): JSX.Element {
  return (
        <section className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-200">
            <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl'>

                <article className='w-full flex flex-col gap-2'>
                    <label className="flex justify-center uppercase">Usuario </label>
                    <div className='flex justify-center mb-2'>
                        <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username' />
                    </div>
                </article>

                <article className='w-full flex flex-col gap-2'>
                    <label className="flex justify-center uppercase ">contraseña</label>
                    <div className='flex justify-center mb-2'>
                        <Input name='contraseña' type='text' placeholder='***********' autoComplete='contraseña' />
                    </div>
                </article>

                <Button >Iniciar Sesión</Button>
            </form>
        </section>
  )
}

export default LoginPage
