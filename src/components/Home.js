import React from 'react';
import Baby from '../media/baby_feet.jpg'

const HomePage = (props) => {

  return (
    <div className="home">
      <h1>my bébé</h1>
      <img src={Baby} className='babypic'/>
    </div>
  )
}

export default HomePage
