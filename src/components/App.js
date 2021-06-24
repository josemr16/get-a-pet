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
			posts:[],
			reserved:[],
			route:'home',
			editId:'',
			user: {
				name:'',
				email:'',
				isAdmin:''
			}
		}
	}
	componentDidMount(){
		fetch('http://localhost:4000/allpets')
		.then(res => res.json())
		.then(posts => {
			console.log(posts)
			this.setState({posts})
		})

	}

	updateState=()=>{
		fetch('http://localhost:4000/allpets')
		.then(res => res.json())
		.then(posts => {
			this.setState({posts})
		})

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
		this.updateState()
		this.setState({route})
		// update state here
	}

	handleOnPostCardEditClick=(id)=>{
		console.log(id)
		this.setState({editId:id})
		// let breed = document.querySelector('#ep-breed');
		// let image = document.querySelector('#ep-image');
		// let description = document.querySelector('#ep-description');
		// // console.log(breed, image, description);
		
		// fetch(`http://localhost:4000/pet/${id}`)
		// .then(res => res.json())
		// .then(pet =>{
		// 	console.log(pet)
		// 	breed.value = pet.breed;
		// 	image.value = pet.image;
		// 	description.value = pet.description;

		// })

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

	handleOnEditFormSaveChangesClick=()=>{

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
					id={this.state.editId}
					onSaveChangesClick={this.changeRoute}/>
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