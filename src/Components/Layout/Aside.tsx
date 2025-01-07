import { ArrowUpDown, Users } from "lucide-react";
import BtnAside from "../Buttons/BtnAside";

export default function Aside() {
  return (
    <aside className="row-start-1 row-end-4 col-start-1 col-end-2 bg-gallery-100 dark:bg-gallery-950 flex flex-col gap-1 transition-[width] duration-300 w-[350px] px-3 border-r-[1px] border-gallery-300">
      <div className="p-3 bg-gallery-300 w-[150px] rounded-md m-4">
        <img src="/src/assets/svg/dibujo.svg" alt="logo" className="w-[125px]" />
        </div>
      <hr className="border-gray-400 w-[95%] place-self-center"/>
      <section className="flex flex-col gap-2">
        <h1>Administración</h1>
        <BtnAside><Users />Empleados</BtnAside>
        <BtnAside><ArrowUpDown />Registro de entradas</BtnAside>
        <BtnAside>Agenda</BtnAside>
        <BtnAside>Inventario</BtnAside>
      </section>
      <section className="flex flex-col gap-2">
        <h1>Tareas</h1>
        <BtnAside>Resumen de tareas</BtnAside>
        <BtnAside>Tareas</BtnAside>
      </section>
    </aside>
  )
}
