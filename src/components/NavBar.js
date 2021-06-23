import '../styles/NavBar.css';

function NavBar (props){
	// body...
	let component;
	if(props.user.isAdmin === 1){
		component =(
			<div className = 'navbar-container'>
				<div>
					<span onClick={()=>props.onHomeClick('home')} className='nb-label'>Home</span>
				</div>
				<div>
					<span onClick={()=>props.onAllPostsClick('allposts')}className='mr4 nb-label'>All Posts</span>
					<span onClick={()=>props.onMakeAPostClick('makepost')}className ='mh2 nb-label'>Make A Post</span>
				</div>
			</div>
		);
	} else if(props.user.isAdmin === 0){

		component =(
			<div className = 'navbar-container'>
				<div>
					<span onClick={()=>props.onHomeClick('home')}  className ='nb-label'>Home</span>
				</div>
				<div>
					<span onClick={()=>props.onAllPostsClick('allposts')} className =' mr4 nb-label'>All Posts</span>
					<span onClick={()=>props.onReservedClick('reserved')} className ='mh2 nb-label'>Reserved</span>
				</div>
			</div>
		);

	}else{

		component =(
			<div className = 'navbar-container'>
				<div>
					<span onClick={()=>props.onHomeClick('home')}  className ='nb-label'>Home</span>
				</div>
				<div>
					<button onClick={()=>props.onSignInClick('signin')} className='mh2 nb-btn'>Sign In</button>
					<button onClick={()=>props.onSignUpClick('signup')}className='mh2 nb-btn'>Sign Up</button>
				</div>
			</div>
		);
	}

	return(
		
		<div>
			{component}
		</div>
	);

}
export default NavBar; 
