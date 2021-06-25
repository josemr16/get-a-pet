import '../styles/SignUpForm.css';

import React from 'react';

class SignUpForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name:'',
			email:'',
			password:'',
			confirmPassword:''

		}
	}

	onNameChange = (event) => {
		this.setState({name:event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onConfirmPasswordChange = (event) => {
		this.setState({confirmPassword: event.target.value})
	}

	
	
	onClickSubmit = () => {


		let { name, email, password, confirmPassword } = this.state

		let objToSend = {
			name:name,
			email:email,
			hash:password,
			isAdmin:0
		}

		if(name.length < 2){
			alert('Name should have at least 2 characters')
		}

		if(!email.includes('@')){
			alert('enter a correct email')
		}
		else{

			fetch('http://localhost:4000/addUser',{
				method:'post',
				headers: {'Content-Type':'application/json'},
				body:JSON.stringify(objToSend)
			})
			.then(res => res.json())
			.then(user=>{
				this.props.loadUser({
					name:user.name,
					email:user.email,
					isAdmin:user.isadmin
				})
				this.props.changeRoute('allposts')
			})



		}
		// console.log( name, email, password, confirmPassword );
		
		// this.props.onRouteChange('home');
	}

	render() {

		return(
			<article className=" br2 ba shadow-5 b--black-10 mt5 mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
				      <div className="mt3">

				      	<label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
				        <input onChange = {this.onNameChange} className="pa2 input-reset ba bg-transparent w-100" type="text" name="name"/>

				        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
				        <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100" type="email" name="email"/>

				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Password</label>
				        <input onChange = {this.onPasswordChange} className="pa2 input-reset ba bg-transparent w-100" type="password" name="password"/>
				      </div>

				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
				        <input onChange = {this.onConfirmPasswordChange} className="b pa2 input-reset ba bg-transparent w-100" type="password" name="password"/>
				      </div>

				    </fieldset>
				    <div className="">
				      <input onClick = {this.onClickSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default SignUpForm;

// function SignUpForm (props){
// 	// body...



// 	return(

// 		<div>



// 		</div>
// 	);

// }
// export default SignUpForm;