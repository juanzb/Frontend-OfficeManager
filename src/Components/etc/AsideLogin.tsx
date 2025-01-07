import { useEffect, useState } from 'react'

export default function AsideLogin() {
    function getRandomNumber() {
      return Math.floor(Math.random() * (15 - 6 + 1)) + 6; // Genera un número entre 6 y 15
    }
    const [indexReadSlogan, setIndexReadSlogan] = useState(0); // Índice del eslogan actual
    const [animating, setAnimating] = useState(false); // Controla la animación
    const eslogans = [
      <><h1>Organiza tu mundo:</h1> <h1>crea tu inventario,</h1> <h1>gestiona tu equipo,</h1> <h1>planea tu éxito</h1></>,
      <><h1>Tu negocio en control:</h1> <h1>inventario, empleados</h1> <h1>y eventos al alcance</h1> <h1>de tu mano</h1></>,
      <><h1>Simplifica la gestión,</h1> <h1>potencia tu crecimiento</h1></>,
      <><h1>De la planificación</h1> <h1>al éxito:</h1> <h1>gestiona todo</h1> <h1>en un solo lugar</h1></>,
      <><h1>Haz de tu agenda</h1> <h1>una herramienta de éxito</h1></>,
      <><h1>Administra empleados,</h1> <h1>controla tu inventario</h1> <h1>y domina tus eventos</h1></>,
      <><h1>Gestiona con precisión,</h1> <h1>crece sin límites</h1></>,
      <><h1>Optimiza tu negocio,</h1> <h1>una herramienta a la vez</h1></>,
      <><h1>Planifica, organiza</h1> <h1>y brilla:</h1> <h1>domina tu día a día</h1></>,
      <><h1>Tu negocio bajo control:</h1> <h1>soluciones para</h1> <h1>cada detalle</h1></>
    ];
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndexReadSlogan((prevIndex) => (prevIndex + 1) % eslogans.length); // Cambia el eslogan
        setAnimating(true); // Activa la animación
        setTimeout(() => {
          setAnimating(false); // Desactiva la animación
        }, 500); // Duración de la animación (en milisegundos)
      }, getRandomNumber() * 1000); // Multiplica por 1000 para convertir a milisegundos
      return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, [eslogans.length]);
  return (
    <section className='p-[20px] bg-shamrock-500 w-[97%] h-[97%] rounded-[20px] relative overflow-hidden'>
    <div className='absolute z-[1] bg-cover bg-center bg-origin-border bg-no-repeat bg-blend-soft-light backgroundImgShamrock bg-shamrock-500 w-full h-full bg-clip-border left-0 top-0'></div>
    <div className={`relative z-[2] flex flex-col gap-[50px] text-[60px] justify-center h-full ${animating ? 'animTextLogin' : ''} [&_>_h1]:text-haiti-950 dark:[&_>_h1]:text-haiti-50`}>
      {eslogans[indexReadSlogan]}
    </div>
  </section>
  )
}
