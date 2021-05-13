import React from 'react'
import Link from 'next/link'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/"><a className="navbar-brand" href="#">Portafolio</a></Link>
 
                <div className="" id="">
                    
                <Link href="/github"><a className="navbar-brand">GitHub</a></Link>
                <Link href="/contact"><a className="navbar-brand">Contact</a></Link>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
