import React from 'react'
import { Link } from 'react-router-dom'
import landingPic from '../../assets/images/landingPic.png'

const LandingPage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
            src={landingPic}
            
            // style={{ width: "50%" }}
            alt="cover"
          />
      

      <div>
        <Link to="/home">
        <h2>welcome</h2>
        </Link>
      </div>
    </div>
  )
}
export default LandingPage
