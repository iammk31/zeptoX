import React from 'react'
import './content.css'
  // import './src/Components/content.css'
  // import { RiArrowRightLine } from 'react-icons/ri'

  function Content() {
    return (
      <section id="content">
        <div className="container content_container">
          <h4>WELCOME TO</h4>
          <h1>zeptoX Education<br />Learning & Earning</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aspernatur ex illo hic doloribus cupiditate.</p>
          <div className="content_cta">
            <a href="" className="content_btn">Get Started </a><br />

            <a href="" className="content_btn">View Courses </a>
          </div>
        </div>
      </section>
    );

  }



export default Content

