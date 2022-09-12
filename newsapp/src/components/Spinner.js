import React from 'react'
import myGif from './loading.gif'
function spinner() {
  return (
    <div className='text-center'>
      <img src={myGif} alt="no gif found" />
    </div>
  )
}

export default spinner
