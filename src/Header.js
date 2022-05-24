import React from 'react'
import "./index.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {Avatar} from "@mui/material"
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='Header'>
      <h5 className='tish-header'>Tish's ⚡️🎧🌙</h5>

      <Link to="/">
        <img className="header__icon" 
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
         alt="airbnb logo"/>
      </Link>

        <div className='header__center'>
            <input type="text" />
                <SearchIcon />
    
        </div>

        <div className='header__right'>
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
    
    </div>
  )
}

export default Header