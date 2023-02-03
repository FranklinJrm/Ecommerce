import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


const LoginScreen = () => {

    const {handleSubmit, register, reset} = useForm()
    const [isLogged, setisLogged] = useState(false)

    const submit = data => {
        const URL ="https://e-commerce-api-v2.academlo.tech/api/v1/users/login"
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.data.token)
                setisLogged(true)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setisLogged(true)
        }else{
            setisLogged(false)
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token")
        setisLogged(false)
    }

    if(localStorage.getItem("token")){
        return (
            <div className='login logged'>
                <h2>user logged ✅</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>        
        )
    }

  return (
    <div className='login'>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="email" id="email" {...register("email")}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" id="password" {...register("password")} />
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginScreen