import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
const Custom404 = () => {
    return (
        <Layout>
            <div className="text-center">
                <h1>404</h1>
                <p>this page no exists. Please return to <a><Link href="/">home</Link></a></p>
                <img src="gatito_shrek.gif" alt="gatito shrek"width="auto" height={500}/>
            </div>
        </Layout>
    )
}

export default Custom404
