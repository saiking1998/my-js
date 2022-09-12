import React from 'react'
import Gif from './loading.gif'
function spinner() {
  return (
    <div className='text-center'>
      <img src={Gif} alt="no gif found" />
    </div>
  )
}

export default spinner
