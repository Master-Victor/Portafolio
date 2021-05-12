import React,{useEffect} from 'react'
import NavBar from './NavBar'
import {useRouter} from 'next/router'
import nprogress from 'nprogress'
import classNames from "classnames";


const Layout = ({children, dark = false}) => {

    const router = useRouter()
    const handleRouteChange = url =>  {
        console.log(url)
        nprogress.start();
    }
    useEffect(() => {
        router.events.on('routeChaneStart', handleRouteChange)
        router.events.on('routeChaneComplete', () => nprogress.done())
        return () => {
            router.events.off('routeChaneStart', handleRouteChange)
        }
    }, [])

    return (
        <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
        <NavBar/>
            <main className="container py-4">
                {children}
            </main>
            {
                dark ? <div></div> :             
                <footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <h1> &copy; Victor Villafañe Portfolio </h1>
                        <p> 2000 - {new Date().getFullYear()} </p>
                        <p> All rights Reserverd </p>
                    </div>
                </footer>
            }
        </div>
    )
}

export default Layout
