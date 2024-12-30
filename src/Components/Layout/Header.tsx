import React from 'react'
import ThemeToggle from '../Buttons/themeToggle';

export default function Header() {
  return (
    <header className='row-start-1 row-end-2 col-start-2 col-end-3'>
      <div>Header</div>
      <ThemeToggle/>
    </header>
  )
}
