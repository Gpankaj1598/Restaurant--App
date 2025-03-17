import React from 'react'
import AboutImg from '../assets/images/about-img.jpeg'

const About = () => {
  return (
    <section className='about' id='about'>
         <h1 className='heading'><span>About </span>Us</h1>   
         <div className="row">
            <div className="image">
                <img src={AboutImg} alt="about" />
            </div>
            <div className="content">
                <h3>What Makes Our Food Special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores nostrum ullam necessitatibus expedita ipsam!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum consequuntur assumenda id, distinctio fugit.</p>
                <a Link="#" className='btn'>Learn More</a>
            </div>
         </div>   
    </section>
  );
};

export default About
