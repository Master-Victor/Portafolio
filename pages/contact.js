import React from 'react'
import Layout from '../components/Layout'
import { useState } from 'react'

const contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => { 
        e.preventDefault()
        if(!email || !name || !message){
            alert('mensaje vacio')
            return
        }
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }
      await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setEmail('')
            setBody('')
          }
          else{
              console.log("error: ",res.status)
          }
    })
}
    return (!submitted) ?(
        <Layout dark={true}>
            <div className="container" style={{backgroundColor: '#eee', width: '50%', borderRadius: '30px'}}>
                < form className="main" >
                    < label htmlFor='name' style={{color: 'black'}}>Name</label>
                    < input type='text' name='name' onChange={(e)=>{setName(e.target.value)}} className="inputField" />  
                    < label htmlFor='email' style={{color: 'black'}}>Email</label>
                    < input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} className="inputField" />
                    < label htmlFor='message' style={{color: 'black'}}>Message</label>
                    < input type='text' name='message' onChange={(e)=>{setMessage(e.target.value)}} className="inputField" />
                <br/>
                < input className="btn btn-dark" style={{borderRadius: '4px'}}type='submit'onClick={ (e) => {handleSubmit(e)} }/>
                </form >
            </div>
        </Layout>
    ):<Layout dark={true}><h1>Mensaje enviado con exito</h1></Layout>
}

export default contact
