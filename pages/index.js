import React from 'react'
import Layout from '../components/Layout'
import {skills, experiences, proyects} from '../profile'
import Link from 'next/link'
const index = () => {
    return (
        <Layout>
            {/* Card Header */}
            <header className="row" >
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="cat.jpg" alt="Foto de Marko Blazevic en Pexels" className="img-fluid"/>
                            </div>
                            <div className="col-md-8">
                                <h1>Victor Villafañe</h1>
                                <h2>React Developer</h2>
                                <p>Inserte Descripcion aqui</p>
                                <a href="/hireme"> Hire Me </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Second Card */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map((item,index) => 
                                <div className="py-3" key={index}>
                                <h5>{item.skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" 
                                            role="progressbar" 
                                            style={{width: `${item.percentage}%`}}>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card  bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        {
                            experiences.map( ({title,description,from,to},i) => 
                            <ui key={i}>
                                <h3>{title}</h3>
                                <h5>{from} - {to} </h5>
                                <p>{description}</p>
                            </ui>)
                        }
                        <Link href="/experience">
                            <a className="btn btn-light">Know More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
            {/* Portfolio */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Porfolio</h1>
                            </div>
                        {
                            proyects.map(({name,description,img,link},K) =>
                            <div className="col-md-4 p-2" key={K}>
                                <div className="card h-100">
                                    <div className="overflow">
                                        <img src={img} alt="TRIVIA APP" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <Link href={link}><a>Know more</a></Link>
                                    </div>
                                </div>
                            </div>    
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default index