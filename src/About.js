import React from 'react'
import "./index.css";

function About() {

  const currentDate = new Date();
  const date = `${currentDate.getDate()}`;
  const year = `${currentDate.getFullYear()}`

  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
    <div className='about__update'>
      
      As of 
      <h2> {months[currentDate.getMonth()]} {date}, {year} </h2>  here's what I've added
    

      <ul>

        <li>
          A calendar using DateRangePicker
        </li>

        <li>
            Routes to different parts of the web-app
        </li>

        <li>
        Used materialUi to include icons that match Airbnb's site
        </li>

        <li>
        Created re-usable rental cards, using materialUi, to be used throughout the app.
        </li>

        {/* <li>
          Added a like button to the searchable rentals
        </li> */}


        <li>
          A footer with links to my blog posts, GitHub, LinkedIn, and email.
        </li>

      </ul>
   




    </div>
  )
}

export default About