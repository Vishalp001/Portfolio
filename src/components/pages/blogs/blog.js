import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from './blogsdata'
function blog() {
  return (
    <div className='blog'>
      <h1 className='heading'>
        <span>#</span>blogs
      </h1>

      <div className='blogsDiv'>
        {data.map((item, index) => {
          return (
            <div key={index} className='item  blog1'>
              <h3>{item.date}</h3>
              <h1>
                <span>#</span>
                {item.heading}
              </h1>

              <div className='blogpara'>
                <p>
                  {`${item.text.substring(0, 200)}...`}
                  <span>
                    <a href={item.link} target='_blank'>
                      Read More
                    </a>
                  </span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default blog
