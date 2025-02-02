import React from 'react'

const AuthorSidebar = () => {
  return (
    <div className='sidebarBox' >
        <div className='profileInfo' >
            <img src='https://iide.co/_next/image/?url=https%3A%2F%2Fiide-media.blr1.cdn.digitaloceanspaces.com%2Fproduction%2F259d6c033ee97a04b85e38479bc0e76e-3645999ef1007ff1ebb9b701d2dd8115.png&w=96&q=75' />
            <h1>Kartik Mittal</h1>
            <h2>SEO Manager</h2>
            <button>Write a email</button>
        </div>
        <div className='socialAuthorBox' >
            <h5>Follow Me</h5>
            <div className='socialAuthorLinks' >
                <div className='socialAuthorItem' ><i className="fab fa-linkedin"></i><p>Linkedin</p></div>
                <div className='socialAuthorItem' ><i className="fab fa-instagram"></i><p>Instagram</p></div>
                <div className='socialAuthorItem' ><i className="fab fa-google"></i><p>Google</p></div>
            </div>
        </div>
        <div className='educationBox' >
            <h5>Education</h5>
            <ul className='socialAuthorLinks' >
                <li>It has survived not only five centuries</li>
                <li> It was popularised in the 1960s with the release of Letraset</li>
                <li> It was popularised in the 1960s with the release of Letraset</li>
            </ul>
        </div>
        <div className='educationBox' >
            <h5>Expertise</h5>
            <div  className='expertiseMainBox' >
                <p>Digital Marketing</p>
                <p>SEO</p>
                <p>Content Writing</p>
                <p>On Page SEO</p>
                <p>Website Development</p>
                <p>Copywriting</p>
            </div>
        </div>
    </div>
  )
}

export default AuthorSidebar