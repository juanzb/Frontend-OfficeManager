import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import Aside from './Aside'
import { ChildrenProp } from '../../interfaces/global/childrenProp'

export default function Layout({children}: ChildrenProp) {
  return (
    <div className='grid grid-rows-3 grid-cols-[max-content_1fr] min-h-dvh'>
    <Header></Header>
    <Aside></Aside>
    <main className='row-start-2 row-end-3 col-start-2 col-end-3 text-gallery-950 dark:text-gallery-50'>
      {children}
    </main>
    <Footer></Footer>
    </div>
  )
}
