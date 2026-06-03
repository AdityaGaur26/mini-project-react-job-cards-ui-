import React from 'react'
import { Bookmark } from 'lucide-react'
const card = (prop) => {
  return (
    <div className="card">
        <div className='upper'>
          <div className="top">
            <img src={prop.logo} alt="" />
            <button>Save <Bookmark size={20} /></button>
          </div>
          <div className="center">
            <h3>{prop.company} <span>{prop.time}</span></h3>
            <h2>{prop.role}</h2>
            <div className='tag'>
              <h4>{prop.type}</h4>
              <h4>{prop.level}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>{prop.salary}</h3>
              <p>{prop.location}</p>
            </div>
          </div>
          <button>
            Apply Now
          </button>

        </div>
      </div>
  )
}

export default card