import React from 'react'

export default function Hero({HeroTitle,HeroSubTitle}) {
  return (
    <>
      <div className="Hero-continer">
        <h2>{HeroTitle}</h2>
        <p>{HeroSubTitle}</p>
      </div>
    </>
  )
}
