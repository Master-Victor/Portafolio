import React from 'react'
import Layout from '../components/Layout'
import {skills, experiences, proyects} from '../profile'
import Link from 'next/link'
import Fondo from '../components/Fondo'
const index = () => {
    return (
        <Layout>
            {/* Card Header */}
            <header className="row" >
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="portafolio.jpeg" alt="Foto de Marko Blazevic en Pexels" className="img-fluid"/>
                            </div>
                            <div className="col-md-8">
                                <h1>Victor Villafañe</h1>
                                <h2>React Developer</h2>
                                <h5>Mi nombre es Victor, soy Desarrollador React, estudiante de Ingenieria en Electrónica
                                    en UTN FRBA.
                                    <br/>
                                    <h4>Tengo conocimiento en:</h4> 
                                    <ul>
                                        <li>Microcontroladores.</li>
                                        <li>Diseño de círcuitos impresos.</li> 
                                        <li>Reparación de PCs y Notebooks.</li> 
                                        <li>Desarrollo web utilizando React y su ecosistema.</li> 
                                        <li>Base de datos SQL y NoSQL.</li> 
                                        <li>Desarrollo de apps móviles utilizando React Native.</li>
                                    </ul>
                                    Me gustaría poder avanzar profesionalmente en 
                                    mis conocimientos ya que, me gusta ser proactivo y estoy dispuesto a innovarme constantemente.
                                </h5>
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
                            <a className="btn btn-light" href="cv.png" target="_blank">Know More</a>
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
