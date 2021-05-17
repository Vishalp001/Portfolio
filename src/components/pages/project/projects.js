import React from 'react'
import data from './dataproject'

function projects() {
  return (
    <div>
      <h1 className='projectsHeading'>
        <span>#</span>projects
      </h1>

      {data.map((item, index) => {
        return (
          <div className='showCase'>
            <div key={index}>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              <a rel='noreferrer' target='_blank' href={item.liveProject}>
                Live Project
              </a>
              <a rel='noreferrer' target='_blank' href={item.sourceCode}>
                Source Code
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default projects
