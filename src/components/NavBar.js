import '../styles/NavBar.css';

function NavBar (props){
	// body...
	let component;
	if(props.user.isAdmin === 1){
		component =(
			<div className = 'navbar-container'>
				<div>
					<img 
					name='home'
					className='home-icon'
					width='30px'
					src='https://image.flaticon.com/icons/png/512/25/25694.png'
					onClick={()=>props.onHomeClick('home')} />
					<span className='nb-uname'>{`Hello! ${props.name}`}</span>

					{/*<span 
					onClick={()=>props.onHomeClick('home')} className='nb-label home-icon'><img width='20px' src='https://image.flaticon.com/icons/png/512/25/25694.png'/></span>
					<span>{`Hello! ${props.name}`}</span>*/}
				</div>

				<div>
					<span 
					name='allposts'
					onClick={()=>props.onAllPostsClick('allposts')}
					className='home-icon mr4 nb-label'>ALL POSTS</span>

					<span
					name='makeapost'
					onClick={()=>props.onMakeAPostClick('makepost')}
					className ='home-icon mh2 nb-label'>NEW POST</span>

					<img 
					onClick={props.onSignOutClick}
					name='signout'
					width='30px'
					className='home-icon ml5'
					src='https://cdn2.iconfinder.com/data/icons/complete-common-version-4-3/1024/exit8-512.png'/>
				</div>
			</div>
		);
	} else if(props.user.isAdmin === 0){

		component =(
			<div className = 'navbar-container'>
				<div>
					<img 
					name='homeicon'
					src='https://image.flaticon.com/icons/png/512/25/25694.png'
					onClick={()=>props.onHomeClick('home')}  
					className ='home-icon nb-label'
					width='30px'/>
					<span className='nb-uname'>{`Hello! ${props.name}`}</span>
				</div>
				<div>
					<span 
					name='allposts'
					onClick={()=>props.onAllPostsClick('allposts')}
					className='home-icon mr4 nb-label'>ALL POSTS</span>

					<span 
					name='reserved'
					onClick={()=>props.onReservedClick('reserved')} 
					className ='mh2 nb-label reserved-icon'>RESERVED</span>


					<img 
					onClick={props.onSignOutClick}
					name='signout'
					width='30px'
					className='home-icon ml5'
					src='https://cdn2.iconfinder.com/data/icons/complete-common-version-4-3/1024/exit8-512.png'/>
				</div>
			</div>
		);

	}else{

		component =(
			<div className = 'navbar-container'>
				<div>
					<img 
					name='home'
					className='home-icon'
					width='30px'
					src='https://image.flaticon.com/icons/png/512/25/25694.png'
					onClick={()=>props.onHomeClick('home')} />
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
