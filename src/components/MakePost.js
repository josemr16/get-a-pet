import React,{Component} from 'react';
import '../styles/MakeEditPost.css';

class MakePost extends Component{
	constructor(props){
		super(props)

		this.state = {
			breed:'',
			image:'',
			description:''
		}
	}

	onInputChange =(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	onSaveChangesClick =()=>{

		let {breed,image,description} = this.state;

		// make a fetch here 
		fetch('http://localhost:4000/addpet',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
				breed,
				image,
				description,
				reservation_id:null
			})
		})
		.then(res => res.json())
		.then(pet =>{
			alert('Success!Pet have been added')
			this.props.onSaveChangesClick('allposts')
		})
		.catch(err => alert('Something went wrong :('))
		// change route

		
	}


	render(){
		return(
			
			<div className='mv4'>
				<div className='shadow-5 form-container'>
			        <h1 className=''>Make Post</h1>
			        <h3 className="">Pet Breed</h3>
			        <input onChange={this.onInputChange}id='mp-breed'className="nc-input" name='breed' type="text"/>
			        <h3 className="">Pet Image URL</h3>
			        <input onChange={this.onInputChange} id='mp-url'className="nc-input" name='url' type="text"/>
			        <h3 className="">Pet Description</h3>
			        <textarea onChange={this.onInputChange} id='mp-description'className='nc-ta' name='description' placeholder='Enter description here'></textarea>
			        <button onClick = {this.onSaveChangesClick}className='nc-btn'>Save Changes</button>
			    </div>
			</div>
		);
	}	

}
export default MakePost;