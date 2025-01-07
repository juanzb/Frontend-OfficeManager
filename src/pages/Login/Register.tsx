import { FormEvent } from 'react';
import AsideLogin from '../../Components/etc/AsideLogin'
import ThemeToggle from '../../Components/Buttons/themeToggle';
import Logo from '../../Components/elements/Logo/Logo';

export default function Register() {
  function handlerFormLogin(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <main className='grid grid-cols-2 place-items-center text-gallery-950 dark:text-gallery-50 min-h-screen relative'>
      <div className='absolute top-[25px] left-[25px]'><ThemeToggle></ThemeToggle></div>
      <section className='flex flex-col gap-[30px] justify-center relative h-full'>
        <Logo size={200}></Logo>
        <h1 className='text-[34px] font-bold'>Bienvenido a <span className='text-shamrock-400 dark:text-shamrock-500'>Office</span> Manager</h1>
        <hr className='' />
        <form action="" onSubmit={handlerFormLogin} className='flex flex-col gap-2'>
          <h3 className='font-semibold text-[20px]'>Registro</h3>
          <label htmlFor="name" className='text-[12px]'>Primer nombre</label>
          <input type="text" id='name' name='name' className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]' required/>
          <label htmlFor="secondName" className='text-[12px]'>Segundo nombre</label>
          <input type="text" id='secondName' name="secondName" className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]'/>
          <label htmlFor="userName" className='text-[12px]'>Nombre de usuario</label>
          <input type="text" id="userName" name='userName' className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]' required/>
          <label htmlFor="celphone" className='text-[12px]'>Teléfono</label>
          <input type="tel" id="celphone" name='celphone' className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]' required/>
          <label htmlFor="age" className='text-[12px]'>Edad:</label>
          <input type="number" className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]' min={18} max={200}/>
          <label htmlFor="address" className='text-[12px]'>Dirección:</label>
          <input type="text" content='' maxLength={100}/>
          <label htmlFor="Email" className='text-[12px]'>Email</label>
          <input type="email" name="Email" id="Email" className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]' required/>
          <label htmlFor="password" className='text-[12px]'>Contraseña</label>
          <input type="password" name="password" id="password" className='border-[2px] border-shamrock-400 rounded-md h-[30px] p-[20px] w-full mx-[5px]' required/>
          <a href="/" className='text-[14px] text-gallery-300 hover:text-gallery-500 transition-colors duration-[300ms]'>¿Ya tienes cuenta?</a>
          <button type="submit" className='bg-shamrock-400 dark:bg-shamrock-500 font-medium py-[10px] px-[20px] w-max rounded-[5px] hover:bg-shamrock-300 transition-[background,_filter] duration-300 activeShadow'>Registrarse</button>
        </form>
      </section>
      <AsideLogin></AsideLogin>
    </main>
  )
}
