import React from 'react'
import Layout from '../components/Layout'
import Error from '../pages/_error'
const github = ({user ,statusCode}) => {


    if(statusCode){
        return <Error/>
    }

    return (
        <Layout dark={true}>
           <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1> {user.login} </h1>
                        <img src={user.avatar_url} />
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary ">My GitHub</a>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}
export async function getServerSideProps(){
    const res = await fetch('https://api.github.com/users/Master-Victor')
    const data = await res.json()

    const statusCode = res.status > 200 ? res.status : false

    console.log(data)
    return {
        props:{
            user:data,
            statusCode
        }
    }
}
export default github
