import React from 'react'
import "./index.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__links'>
        <a href='https://github.com/LatishaFar1'>
       <GitHubIcon  />
       </a>
      
       <a href='https://tishfaroul.medium.com/'>
       <BookIcon />
       </a>


       <a href='https://www.linkedin.com/in/latisha-faroul/'>
       <LinkedInIcon />
       </a>


       <a href='lfaroul14@gmail.com'>
       <EmailIcon />
       </a>

       <a href='https://twitter.com/TishFaroul'>
       <TwitterIcon />
       </a>

        </div>
      
        


    </div>
  )
}

export default Footer