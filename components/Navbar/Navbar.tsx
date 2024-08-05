import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='container mx-auto lg:px-2 px-5 lg:w-2/5'>
        <div className='container flex items-center justify-between mx-auto '>
            <Link href="/" className='text-2xl font-medium'>Yoshi</Link>
        </div>
        <ul className='flex items-center text-sm py-4'><li><Link className="block px-4 py-2 hover:text-sky-900 transition-all duration-300" href="/">Home</Link></li></ul>
        <ul><li><Link className="block px-4 py-2 hover:text-sky-900 transition-all duration-300" href="/">Twitter</Link></li></ul>
        <ul><li><Link className="block px-4 py-2 hover:text-sky-900 transition-all duration-300" href="/">Qiita</Link></li></ul>
    </nav>
  )
}

export default Navbar