import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss'
const NavBar = () => {
  return (
    <div className='navbar'>
    <div className="wrapper">
    <div className='left'>
      <div className="language">
         <span>EN</span>
        <ExpandMoreIcon/>
      </div>
      <div className='currency'>
        <span>USD</span>
        <ExpandMoreIcon/>
      </div>
      <div className='men'>
        <Link className='link' to="/products/1">
          Men
        </Link>
      </div>
      <div className='women'>
        <Link className='link' to="/products/2">
          Women
        </Link>
      </div>
      <div className='children'>
        <Link className='link' to="/products/3">
          Children
        </Link>
      </div>
      <div className='accessories'>
        <Link className='link' to="/products/4">
          Accessories
        </Link>
      </div>
    </div>
    <div className='center'>
      <Link className='link' to="/">STORE</Link> 
    </div>
    <div className='right'>
    <div className='homepage'>
      <Link className='link' to="/">Homepage</Link> 
    </div>
    <div className='about'>
      <Link className='link' to="/">About</Link> 
    </div>
    <div className='contact'>
      <Link className='link' to="/">Contact</Link> 
    </div>
    <div className='stores'>
      <Link className='link' to="/">Stores</Link> 
    </div>
    <div className="icons">
    <SearchIcon/>
    <AccountCircleIcon/>
    <FavoriteIcon/>
    <div className='cart'>
    <AddShoppingCartIcon/>
    <span>0</span>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default NavBar