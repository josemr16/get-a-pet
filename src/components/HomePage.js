import React,{Component} from 'react';
import '../styles/HomePage.css';


function HomePage (){

    return(
        <div>
            <h1 className="welcome">WELCOME to GET-A-PET</h1>
            <h3 className="desc">Your local pet adoption agency.</h3>
            <div className="animal-container">
                <div>
                    <img className="one"src="https://rabbitbreeders.us/wp-content/uploads/Meat-Rabbits.jpg" alt="cat1"/>
                </div>

                <div>
                    <img className="two"src="https://i.pinimg.com/originals/42/a0/6d/42a06da15a97633c6f823cf3d9238221.jpg"alt="cat-dog"/>
                </div>

                <div>
                    <img className="three"src="https://data.1freewallpapers.com/download/cuddle-cat-free-desktop-1600x1200.jpg" alt="cat2"/>
                </div>

                <div>
                    <img className="four"src="https://images3.alphacoders.com/700/70019.jpg" alt="dog3"/>
                </div>

                <div>
                    <img className="five"src="https://d.newsweek.com/en/full/1782956/stock-image-english-bulldog.jpg?w=1600&h=1200&q=88&f=ebff3832af1a404c626f58bcffd43c34" alt="hug1"/>
                </div>

                <div>
                    <img className="six"src="https://res.cloudinary.com/madpaws/image/upload/c_limit,f_jpg,fl_attachment,h_1980,q_auto,w_1980/v1/uploads/madpaws_1531999452_0.jpeg.jpg" alt="animalgroup"/>
                </div>

                <div>
                    <img className="seven"src="http://hollybankvets.co.uk/wordpress1/wp-content/uploads/2018/05/b48511ad-71cd-4cbe-95b5-d95df04a14e4.jpg"alt="bunny"/>
                </div>

                <div>
                    <img className="eight"src="https://d.newsweek.com/en/full/1805840/dog-young-boy.jpg?w=1600&h=1200&q=88&f=4726bc9627f157e80c81176a53fae3f2"alt="doggo"/>
                </div>
            </div>
        </div>
    )
}
export default HomePage;