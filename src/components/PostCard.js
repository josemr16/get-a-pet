import '../styles/PostCard.css';

function PostCard (props){
	// body...

	let component;

	if(props.user.isAdmin === 1){
		component =(
			<div className='shadow-5 pc-container'>
				
				<img className='pc-img'src={props.post.image} alt='pet' />
				
				<div className='pc-items-container'>
					<h1 className='pc-breed'>{props.post.breed}</h1>
					<p className='pc-description'>{props.post.description}</p>	
				</div>
				<button onClick={props.onEditClick} className='pc-btn pc-edit-btn'>Edit</button>
				<button onClick={props.onDeleteClick} className='pc-btn pc-delete-btn'>Delete</button>
			</div>
		);
	}
	else if(props.user.isAdmin === 0 && props.route === 'allposts'){
		component =(
			<div className='shadow-5 pc-container'>
				
				<img className='pc-img'src={props.post.image} alt='pet' />
				
				<div className='pc-items-container'>
					<h1 className='pc-breed'>{props.post.breed}</h1>
					<p className='pc-description'>{props.post.description}</p>	
				</div>
				<button onClick={props.onReserveClick} className='pc-reserve-btn'>Reserve for appointment</button>
			</div>
		);
	}
	else{
		component =(
			<div className='shadow-5 pc-container'>
				
				<img className='pc-img'src={props.post.image} alt='pet' />
				
				<div className='pc-items-container'>
					<h1 className='pc-breed'>{props.post.breed}</h1>
					<p className='pc-description'>{props.post.description}</p>	
				</div>
				<button onClick={props.onRemoveClick} className='pc-remove-btn'>Remove reservation</button>
			</div>
		);
	}

	return(
		
		<div>
			{component}
		</div>
	);

}
export default PostCard;