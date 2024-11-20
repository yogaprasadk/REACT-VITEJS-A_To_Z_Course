import React from 'react'

const card = (props) => {
  return (
    <div>
          {/* child component */}
          {/* if i type on input the text will be also displayed on paragraph */}
          <input type='text' onChange={(e)=> props.setName(e.target.value)}/>
          <p>name:{props.name}</p>

      
    </div>
  )
}

export default card