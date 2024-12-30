import { ChildrenProp } from '../../interfaces/global/childrenProp'

export default function BtnAside({children}: ChildrenProp) {
  return (
    <button className='rounded-md p-3 flex justify-center items-center gap-2 bg-casal-400 dark:bg-casal-500 text-gallery-950 dark:text-gallery-50'>
      {children}
    </button>
  )
}
