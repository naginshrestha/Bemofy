import React from 'react'
import { Button } from 'react-bootstrap'
import { CustomInput } from '../Components/CustomInput'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { Form } from 'react-bootstrap'


const initialState ={
    fname :"Nagin",
    lname :"Shrestha",
    email:"Abc@gmail.com",
    password:"Abc12345",
    confirmpassword:"Abc12345"

}
  
export const Registration = () => {
    const [frm, setFrm] = useState(initialState)
    const [value, setValue] = useState()
    const [error,setError] = useState('')

    const reginputs = [
        {
            value: frm.fname,
            label :"First Name",
            name :"fname",
            type:"text",
            required: true,
            placeholder:"Enter f-name"

        },
        {
            value: frm.lname,
            label :"Last Name",
            name :"lname",
            type:"text",
            required:true,
            placeholder:"Enter l-name"

        },
        {
            value: frm.contact,
            label :"Contact number",
            name :"contact",
            type:"number",
            required:true,
            placeholder:"Enter contact no"

        },
        {
            value: frm.email,
            label :"Email",
            name :"email",
            type:"email",
            required:true,
            placeholder:"Enter email"
        },
        {
            value: frm.password,
            label :"Password",
            name :"password",
            type:"password",
            required:true,
            placeholder:"Enter password"
        },
        {
            value: frm.confirmpassword,
            label :"Confirm Password",
            name :"confirmpassword",
            type:"password",
            required:true,
            placeholder:"Re-enter password"
        }
    ]

    const handleChanged =(e)=>{
        const {name , value} = e.target;

        if(name === "password" || "confirmpassword")
        {
            setError("");

            value.length < 8 && setError("Password must be at least 8 characters long");
            !/[0-9]/.test(value) && setError("Number is required");
            !/[A-Z]/.test(value) && setError("Upper case is required");
            !/[a-z]/.test(value) && setError("Lower case is required");

            setFrm ({...frm,[name]: value});
        }

        if (name ==="email"){
            setError('');

            !/^\S+@\S+\.\S+$/.test(value) && setError("Invalid email address")
            setFrm ({...frm,[name]: value});
        }


    }

    const handleChangedPhone =(e) =>{
        const contactno = e.target.value;

        setFrm ({...frm,contactno});
      
    }
    const handleOnSubmit =(e) =>{
        e.preventDefault();
        console.log(frm);
    }

  return (
    <div className='d-grid login-container'>
        <Form onSubmit={handleOnSubmit} className='shadow p-4  mt-5 w-50 m-auto justify-content-center align-items-center ' >
        <h2>Join Our Community</h2>
        <hr/>
        {
            reginputs.map((item,i)=> (
                
                   (item.name =="contact" )?
                   (
                    <Form onChange={handleChangedPhone}>
                    <Form.Group className='mt-2'>
                    <Form.Label>{item.label}</Form.Label>
                    <PhoneInput maxlength="12"  className='phoneInput'  defaultCountry="AU" value={value} onChange={setValue}/>
                  </Form.Group > 
                    </Form>
                
                   ):
                   (
                    <CustomInput key={i} {...item} onChange={handleChanged}/>

                   )

            ))
        }

        <Form.Group>
            <Form.Text disabled={error} >
                Your Password must contain at least 6 characters including atleast 1 number, 1 uppercase amd lower case
            </Form.Text>

            {error && (
                <ul>
                    <li className='text-danger fw-bolder mt-2'>{error}</li>
                </ul>
            )
            }
        </Form.Group>

        <div className='d-grid mt-3 bg-success border-0 rounded'>
            <Button disabled={error} className='bg-success border-0 rounded' type='submit' >SignUp</Button>

        </div>
        <div className='d-grid mt-1 '>
        <p className='text-end'>Already have account ? <a>signin</a> </p>
        </div>

     
        </Form>

    </div>

  )
}
