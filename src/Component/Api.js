import React from 'react'
import './Api.css'

const Api = (props) => {
  return (
    <div className='cardsContainer'>
      <div className='card'>
        <img className='fitapi' src={props.gifUrl} alt="" />
      </div>
      <div className="lowerTxt">
        <h2>{props.name}</h2>
        <p>{props.target}</p>
        <p>{props.bodyPart}</p>
      </div>
    </div>
  )
}

export default Api
