/* eslint-disable @typescript-eslint/indent */
function LoginPage (): JSX.Element {
    return (
        <section className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 to-blue-200">
            <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl'>

                <article className='w-full flex flex-col gap-2'>
                    <label className="flex justify-center uppercase">Usuario</label>
                    <div className='flex justify-center mb-2'>
                        <input name='username' type='text' placeholder='CP1118342523' autoComplete='username' className='w-full max-w-xs text-center  border p-1 rounded-lg'/>
                    </div>
                </article>

                <article className='w-full flex flex-col gap-2'>
                    <label className="flex justify-center uppercase ">contraseña</label>
                    <div className='flex justify-center mb-2'>
                        <input name='contraseña' type='text' placeholder='***********' autoComplete='contraseña' className='w-full max-w-xs text-center  border p-1 rounded-lg'/>
                    </div>
                </article>

                <button className="p-2 bg-blue-700 rounded-lg text-white font-semibold hover:bg-blue-500" >Iniciar Sesión</button>
            </form>
        </section>
    )
}

export default LoginPage
