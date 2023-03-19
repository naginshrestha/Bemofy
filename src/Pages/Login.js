import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { CustomInput } from '../Components/CustomInput'
import { useState } from 'react'
import {eye} from 'react-icons-kit/fa/eye'
import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'
import Icon from 'react-icons-kit'


export const Login = () => {
    const [frmDt,setFrmDt]= useState({})
    const [type, setType]=useState('password');

    const [icon,setIcon] =useState(eyeSlash)

    const inputs = [
        {
            
            label :"Email",
            name :"email",
            type:"email",
            required:true,
            placeholder:"Enter email"
        },
        {
            label :"Password",
            name :"password",
            type:"password",
            required:true,
            placeholder:"Enter password"
        }
    ]

    const handleChanged =(e) =>{
        const {name,value} = e.target;

        setFrmDt({...frmDt,[name]:value})
        
    }
    const handleChangedPassword =(e) =>{
        const {name,value} = e.target;

        setFrmDt({...frmDt,[name]:value})
    }
   

   

    const handleSumit =(e)=>{
        e.preventDefault(); 

    }
    const handleshow =(e) =>{ 

        if(type==='password'){
            setIcon(eye)     
            setType('text');
          }
          else{
            setIcon(eyeSlash)    
            setType('password');
          }
    }
  return (

    <div className='d-grid login-container'>

        <Form onSubmit={handleSumit} className='shadow m-auto p-5 mt-5 w-50 justify-content-center align-items-center ' >
        <h2>Sign in to dashboard</h2>
        <hr/>
        {
            inputs.map((item,i)=> (

                (item.name === "password")?(
                    <Form.Group className='mt-2'>
                    <Form.Label>{item.label}</Form.Label>

                    <InputGroup>
                    <Form.Control placeholder='Enter password' type={type} name='password' value={frmDt.password} onChange={handleChangedPassword}/>

                    <InputGroup.Text>
                    <Icon icon={icon} onClick={handleshow} ></Icon>
                    </InputGroup.Text>
                   
                    
                    </InputGroup>

                    </Form.Group>
                ):
                (
                    <CustomInput key={i} {...item} onChange={handleChanged}/>

                )


             
            ))
        }
        <div className=' mt-3 text-end '>
        Forget Password?<a href='forgetpassword' className='text-decoration-none ms-1'>Reset</a>
        </div>
        <div className='d-grid mt-2 border-0 rounded'>
            <Button type='submit' className='bg-success border-0 rounded'>SignIn</Button>
        </div>
        </Form>

    </div>



  )
}
 