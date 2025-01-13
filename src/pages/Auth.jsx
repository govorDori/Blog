import React from 'react'
import { useContext } from 'react'
import { Form, NavLink, useLocation } from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap'
import { UserContext } from '../context/UserContext'
import { Toastify } from '../components/Toastify'
import { useEffect } from 'react'

const middleStyle={
	border:'1px solid black',
	backgroundColor:'black',
	width:'400px',
	height:'440px',
	position:'absolute',
	top:'50%',
	left:'50%',
	transform:'translate(-50%, -50%)',
	padding:'15px',
	boxShadow: '10px 7px 60px 20px black',
	borderRadius:'10px'

}

export const Auth = () => {
	const {user,signInUser, msg, setMsg, signUpUser}=useContext(UserContext)

	const location = useLocation()
	console.log(location.pathname);
	const isSignin = location.pathname == '/auth/in' //true
	

	console.log(msg);
	
useEffect(()=>{
	setMsg(null)
},[])
	const handleSubmit=(event)=>{
		event.preventDefault
		setMsg({...msg,err:null})
		const data = new FormData(event.currentTarget)
		console.log(data.get('email'), data.get('password'), data.get('displayName'));
		//signInUser(data.get('email'), data.get('password'))
		if(isSignin){
			signInUser(data.get('email'),data.get('password'))
		} else {
			signUpUser(data.get('email'),data.get('password'), data.get('displayName'))
		}
		
	}

	console.log(user);
	

	return (
		<div className='page'>
			<div style={middleStyle}>
				<h3 className='signInUp'>{isSignin ? 'Sign In' : 'Sign Up'}</h3>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label className='emailLoginLabel'>Email</Label>
						<Input className='emailLoginTextField'
							name="email"
							placeholder="email"
							type="email"
						/>

					</FormGroup>
					<FormGroup>
						<Label className='pwLoginLabel'>
							Password
						</Label>
						<Input className='pwLoginTextField'
							name="password"
							placeholder="password"
							type="password"
						/>

					</FormGroup>
					{!isSignin &&
					<FormGroup>
						<Label className='signupUsernameLabel'>
							Username
						</Label>
						<Input className='usernameSignUpTextField' name="displayName" type="text" placeholder='username'
						/>
					</FormGroup>
					}
					<div className='signinupSubmitContainer'>
						<Button className='signinupSubmit'>
							Submit
						</Button>
					</div>
				</Form>
				{isSignin && (
					<NavLink style={{textDecoration:"none"}} to="/pwReset">
						<div className='forgotPwButtonContainer'>
							<Button className='forgotPwButton' >Forgotten password</Button>
						</div>
					</NavLink>

				)}
				{msg && <Toastify {...msg}/>}
			</div>
		</div>
	)
}