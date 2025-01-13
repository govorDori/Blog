import React from 'react'

import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Toastify } from '../components/Toastify'
const middleStyle={
	border:'1px solid black',
	backgroundColor:'black',
	width:'500px',
	height:'250px',
	position:'absolute',
	top:'50%',
	left:'50%',
	transform:'translate(-50%, -50%)',
	padding:'15px',
	boxShadow: '10px 7px 60px 20px black',
	borderRadius:'10px'
}


export const PwReset = () => {
  const {msg,resetPassword}=useContext(UserContext)

  const handleSubmit=(event)=>{
    event.preventDefault()
     const data=new FormData(event.currentTarget)
     console.log(data.get('email'));
     
   resetPassword(data.get('email'))
  }
  return (
    <div className='page'>
    <div  style={middleStyle}	>
     <h3 className='pwResetTitle'>Reset password</h3>
     <Form onSubmit={handleSubmit}>
       <FormGroup>
         <Label className='pwResetLabel'> Email  </Label>
         <Input className='pwResetTextField'  name="email"    placeholder="email"    type="email"    />
       </FormGroup>
       <div className='pwResetButtonContainer'>
        <Button className='pwResetButton'>Set new password</Button>
       </div>
     </Form>
     
     {msg && <Toastify  {...msg}/>}
    </div>
   </div>
  )
}


