import React from 'react'
import { Form } from 'react-bootstrap'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import 'react-phone-number-input/style.css'

export const CustomInput = ({label , ...rest}) => {
    const [value, setValue] = useState();
  return (

    <Form.Group className='mt-2'>
    <Form.Label>{label}</Form.Label>
    <Form.Control {...rest} />
    </Form.Group>

  )
}  
