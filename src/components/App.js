import React,{Component} from 'react';
import PostCardList from './PostCardList';
import EditPost from './EditPost';
import MakePost from './MakePost';
import Navbar from './NavBar';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			posts:[1,2,7],
			reserved:[1],
			route:'home',
			user: {
				name:'',
				email:'',
				isAdmin:''
			}
		}
	}

	loadUser=(user)=>{
		this.setState({user:{
			name:user.name,
			email:user.email,
			isAdmin:user.isAdmin
		}})
		console.log(this.state.user)
	}

	changeRoute =(route)=>{

		this.setState({route})
		// update state here
	}

	handleOnPostCardEditClick=(id)=>{
		console.log(id)
		this.changeRoute('editpost')

	}

	handleOnPostCardDeleteClick=(id)=>{
		console.log(id)

	}

	handleOnPostCardReserveClick=(id)=>{
		console.log(id)

	}

	handleOnPostCardRemoveClick=(id)=>{
		console.log(id)

	}

	handleOnEditSaveChangesClick=()=>{
		// needs to be handle
		console.log('click');
	}

	render(){

		let component;
		switch(this.state.route){
			case 'signin':
			component =(
				<div>
					<SignInForm 
					loadUser = {this.loadUser}
					changeRoute={this.changeRoute}
					/>
				</div>
			);
			break
			case 'signup':
			component = (
				<div>
					<SignUpForm 
					loadUser = {this.loadUser}
					changeRoute={this.changeRoute} />
				</div>
			);
			break
			case 'allposts':
			component =(
				<div>
					<PostCardList 
					user={this.state.user}
					posts={this.state.posts}
					onEditClick={this.handleOnPostCardEditClick}
					onReserveClick={this.handleOnPostCardReserveClick}
					onDeleteClick={this.handleOnPostCardDeleteClick}
					route={this.state.route}/>


				</div>
			);
			break
			case 'reserved':
			component =(
				<div>
					<PostCardList 
					user={this.state.user}
					posts={this.state.reserved}
					onRemoveClick={this.handleOnPostCardRemoveClick}
					route={this.state.route}/>
				</div>
			);
			break
			case 'makepost':
			component=(
				<div>
					<MakePost
					onSaveChangesClick={this.changeRoute}/>
				</div>
			);
			break
			case 'editpost':
			component=(
				<div>
					<EditPost 
					onSaveChangesClick={this.handleOnEditSaveChangesClick}/>
				</div>
			);
			break
			default:
			component=(
				<div>
					<h1>Home</h1>
				</div>
			);
		}


		return(
			<div>
				<Navbar 
				user={this.state.user}
				onSignInClick={this.changeRoute} 
				onSignUpClick={this.changeRoute}
				onAllPostsClick={this.changeRoute}
				onReservedClick={this.changeRoute}
				onHomeClick={this.changeRoute}
				onMakeAPostClick={this.changeRoute}/>

				{component}
			</div>
		);
	}
}
export default App;