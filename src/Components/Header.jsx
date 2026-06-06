import React from 'react'

export default function Header() {
  return (
    <>
      <header>
        <div className="header-cont">
            <h1>EduBlog</h1>
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Articles</li>
          <li>Resources</li>
        </ul>
        <div className="buttons">
          <button className="LoginBtn">Login</button>
          <button className="SignUpBtn">Sign Up</button>
        </div>
        </div>
      </header>
    </>
  )
}
