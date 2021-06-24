import React,{Component} from 'react';
import '../styles/MakeEditPost.css';

class EditPost extends Component{
	constructor(props){
		super(props)
		this.state = {
			breed:'',
			image:'',
			description:''
		}
	}

	componentDidMount(){
		let breed = document.querySelector('#ep-breed');
		let image = document.querySelector('#ep-image');
		let description = document.querySelector('#ep-description');
		// console.log(breed, image, description);
		
		fetch(`http://localhost:4000/pet/${this.props.id}`)
		.then(res => res.json())
		.then(pet =>{
			// console.log(pet)
			breed.value = pet.breed;
			image.value = pet.image;
			description.value = pet.description;
			this.setState({
				breed:pet.breed,
				image:pet.image,
				description:pet.description
			})

		})
	}

	onInputChange =(e)=>{
		this.setState({[e.target.name]:e.target.value});
		console.log(this.state);
	}

	onSaveChangesClick=()=>{

		let {breed,image,description} = this.state;

		fetch(`http://localhost:4000/updatePet/${this.props.id}`,{
			method:'put',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				breed,
				image,
				description
			})
		})
		.then(res=> {
			if(res.status === 200){
				alert('Successfully update pet :)');
				this.props.onSaveChangesClick('allposts')
			}
		})
		.catch(err => {
			console.log("an error occured updating pet info " + err);
			alert('This was not suppossed to happen')
		})
		// .then(console.log);
	}

	render(){
		return(
			
			<div className='mv4'>
				<div className='shadow-5 form-container'>
		            <h1 className=''>Edit Post</h1>
		            <h3 className="">Pet Breed</h3>
		            <input onChange={this.onInputChange}id='ep-breed'className="nc-input" type="text" name='breed'></input>
		            <h3 className="">Pet Image URL</h3>
		            <input onChange={this.onInputChange} id='ep-image'className="nc-input" type="text" name='image'></input>
		            <h3 className="">Pet Description</h3>
		            <textarea onChange={this.onInputChange} id='ep-description'className='nc-ta' placeholder='Enter description here' name='description'></textarea>
		            <button onClick = {this.onSaveChangesClick}className='nc-btn'>Save Changes</button>
		        </div>

			</div>
		);
	}

}
export default EditPost;