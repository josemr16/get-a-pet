import '../styles/NavBar.css';

function NavBar ({adminIsSignedIn, userIsSignedIn}){
	// body...
	let component;
	if(adminIsSignedIn){
		component =(
			<div className = 'navbar-container'>
				<div>
					<span className='nb-label'>Home</span>
				</div>
				<div>
					<span className='mr4 nb-label'>All Post</span>
					<span className ='mh2 nb-label'>Make A Post</span>
				</div>
			</div>
		);
	} else if(userIsSignedIn){

		component =(
			<div className = 'navbar-container'>
				<div>
					<span className ='nb-label'>Home</span>
				</div>
				<div>
					<span className =' mr4 nb-label'>All Post</span>
					<span className ='mh2 nb-label'>Reserved</span>
				</div>
			</div>
		);

	}else {

		component =(
			<div className = 'navbar-container'>
				<div>
					<span className ='nb-label'>Home</span>
				</div>
				<div>
					<button className='mh2 nb-btn'>Sign In</button>
					<button className='mh2 nb-btn'>Sign Up</button>
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
