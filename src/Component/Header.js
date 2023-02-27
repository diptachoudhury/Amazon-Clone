import React from 'react'
import "./Header.css"
import {Link, NavLink} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvider';

const Header=()=>  {
    const [{basket}] = useStateValue(); //  const [{basket},dispatch] = useStateValue();
  
  
  
    return (

      <nav className="header">  
      {/* Logo on the left */}
      <Link to ="/login">
      <img className="header__logo" src="https://www.pngkey.com/png/full/254-2542390_placements-amazon-logo-2018.png" alt="Amazon Logo"/>
      </Link>
      {/* search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      
      {/* 3 links */}
      <div className="header__nav">
        
        {/* 1st Link */}
        <Link to="/login" className="header__link">
            <div className="header__options">
                <span className="header__optionLineOne">Hello Dipta</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
        </Link>
        
        {/* 2nd Link */}
        <Link to="/login" className="header__link">
            <div className="header__options">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>
        
        {/* 3rd Link */}
        <Link to="/login" className="header__link">
            <div className="header__options">
                <span className="header__optionLineOne">Your  </span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </Link>
        {/* 4th Link */}
        <Link to ="/checkout" className="header__link">
           <div className="header_optionBasket">
             <ShoppingBasketIcon/>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
           </div> 
        </Link>

       </div>  




      {/* Basket icon */}
      </nav> 
  )
}

export default Header
