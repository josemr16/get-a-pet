import '../styles/SignInForm.css';
import React from 'react';

class SignInForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			email:'',
			password:''

		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	
	onClickSubmit = () => {

		let { email, password} = this.state

		if(!email.includes('@')){
			alert('enter a valid email')
		}

		if(password.length < 1){
			alert('enter your password')
		}
		else{

			fetch(`http://localhost:4000/user/${email}`)
			.then(res => res.json())
			.then(user=> {
				// console.log(user);
				if(user.hash === password){
					this.props.loadUser({
						name:user.name,
						email:user.email,
						isAdmin:user.isadmin
					})
					this.props.changeRoute('allposts')
				}
				else{
					alert('Your password is wrong');
				}
			})
			.catch(err => alert('your credentials were not found in the database'))
			
		}

	}


	render() {

		return(
			<article className=" br2 ba shadow-5 b--black-10 mt6 mw6 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 mt3 ph0 mh0">Sign In</legend>
				      <div className="mt3">

	
				     	<label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
				        <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100" type="email" name="email"/>

				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Password</label>
				        <input onChange = {this.onPasswordChange} className="pa2 input-reset ba bg-transparent w-100" type="password" name="password"/>
				      </div>

				    </fieldset>
				    <div className="mt3">
				      <input onClick = {this.onClickSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" />
				    </div>
				  </div>
				</main>
			</article>
		);
	}
}

export default SignInForm;

// function SignInForm (props){
// 	// body...



// 	return(
		
// 		<div>



// 		</div>
// 	);

// }
// export default SignInForm;