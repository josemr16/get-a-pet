import '../styles/PostCard.css';

function PostCard (props){
	// body...

	let component;

	if(props.user.isAdmin){
		component =(
			<div className='shadow-5 pc-container'>
				
				<img className='pc-img'src='https://i.pinimg.com/originals/3c/5a/13/3c5a137ef8d6362598ff1c21b3dad2ab.jpg' alt='pet' />
				
				<div className='pc-items-container'>
					<h1 className='pc-breed'>Breed</h1>
					<p className='pc-description'>description goes here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>	
				</div>
				<button className='pc-btn pc-edit-btn'>Edit</button>
				<button className='pc-btn pc-delete-btn'>Delete</button>
			</div>
		);
	}else {


		component =(
			<div className='shadow-5 pc-container'>
				
				<img className='pc-img'src='https://i.pinimg.com/originals/3c/5a/13/3c5a137ef8d6362598ff1c21b3dad2ab.jpg' alt='pet' />
				
				<div className='pc-items-container'>
					<h1 className='pc-breed'>Breed</h1>
					<p className='pc-description'>description goes here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>	
				</div>
				<button className='pc-reserve-btn'>Reserve for appointment</button>
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