import React,{Component} from 'react';
import PostCardList from './PostCardList';
import EditPost from './EditPost';
import MakePost from './MakePost';
import Navbar from './NavBar';
import HomePage from './HomePage';
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
		fetch('http://localhost:4000/allpets/notreserved')
		.then(res => res.json())
		.then(posts => {
			// console.log(posts)
			this.setState({posts})
		})

	}

	updatePostsState=()=>{
		fetch('http://localhost:4000/allpets/notreserved')
		.then(res => res.json())
		.then(posts => {
			this.setState({posts})
		})

	}

	updateReservedState=()=>{
		fetch(`http://localhost:4000/allpets/reserved/${this.state.user.email}`)
		.then(res => res.json())
		.then(posts => {
			this.setState({reserved:posts})
			console.log('Reserved posts')
			console.log(this.state.user.email);
			console.log(posts);
		})

	}


	loadUser=(user)=>{
		this.setState({user:{
			name:user.name,
			email:user.email,
			isAdmin:user.isAdmin
		}})
		this.updateReservedState()
		console.log(this.state.user)
	}

	changeRoute =(route)=>{
		this.updatePostsState()
		this.setState({route})
		if(route === 'reserved'){
			// console.log('route is reserved')
		}

	}
	handleOnSignOutClick=()=>{
		this.setState({
			posts:[],
			reserved:[],
			route:'signin',
			editId:'',
			user:{
				name:'',
				email:'',
				isAdmin:''
			}
		})
	}

	handleOnPostCardEditClick=(id)=>{
		// console.log(id)
		this.setState({editId:id})
		this.changeRoute('editpost')

	}

	handleOnPostCardDeleteClick=(id)=>{
		fetch(`http://localhost:4000/removePet/${id}`,{
			method:'delete',
			headers: {'Content-Type':'application/json'}

		})
		.then(res => {
			if(res.status === 200){
				this.updatePostsState()
				alert('Pet removed from database.')
			}
		})
		.catch(err => console.log("an error occured "+ err));


		console.log(id)

	}

	handleOnPostCardReserveClick=(id)=>{
		fetch(`http://localhost:4000/updatePet/reservation_id/${id}`,{
			method:'put',
			headers:{'Content-Type': 'application/json'},
			body:JSON.stringify({
				reservation_id:this.state.user.email
			})
		})
		.then(res=> {
			console.log(res)
			if(res.status === 200){
				this.updatePostsState();
				this.updateReservedState();
				alert('Successfully reserved pet for appoinment.')
			}
		})
		.catch(err => console.log('error occured reserving pet '+ err))
		console.log(id)

	}

	handleOnPostCardRemoveClick=(id)=>{
		fetch(`http://localhost:4000/updatePet/reservation_id/${id}`,{
			method:'put',
			headers:{'Content-Type': 'application/json'},
			body:JSON.stringify({
				reservation_id:null
			})
		})
		.then(res=> {
			console.log(res)
			if(res.status === 200){
				this.updatePostsState();
				this.updateReservedState();
				alert('Successfully removed reservation.')
			}
		})
		.catch(err => console.log('error occured reserving pet '+ err))
		console.log(id)
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
					<HomePage />
				</div>
			);
		}


		return(
			<div>
				<Navbar 
				user={this.state.user}
				name ={this.state.user.name}
				onSignInClick={this.changeRoute} 
				onSignUpClick={this.changeRoute}
				onAllPostsClick={this.changeRoute}
				onReservedClick={this.changeRoute}
				onHomeClick={this.changeRoute}
				onMakeAPostClick={this.changeRoute}
				onSignOutClick={this.handleOnSignOutClick}/>

				{component}
			</div>
		);
	}
}
export default App;