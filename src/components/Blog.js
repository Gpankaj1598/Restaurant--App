import React from 'react'
import { blog } from '../Data'

const Blog = () => {
  return (
        <>
            <section className='blogs' id='blogs'>
                <h1 className='heading'>Our <span>Blog</span></h1>   
                <div className="box-container">
                    {blog.map((item, index) =>(
                        <div className="box" key={index}>
                            <div className="image">
                                <img src={item.img} alt="img" />
                            </div>   
                            <div className="content">
                                <a href="#" className='title'>
                                    Tasty and refreshing spices
                                </a>
                                <span>by admin / 21st may,2022</span>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, minus.</p>
                                <a href="#" className='btn'>Read More.</a>
                            </div>
                        </div>
                    ))}
                </div>    
            </section>
        </>
  )
}

export default Blog
