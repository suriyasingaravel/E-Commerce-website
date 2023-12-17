import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
     <Link to={"/"} style={{textDecoration:"none"}}   > 
     <div className="header-logo">
      <StorefrontIcon className='logo-image' fontSize='large' />
      <h2 className='logo-title'>E-SHOP</h2>
      </div>
      </Link>

      <div className="header-search">
       <input type="text"  className='search-box'  />
       <SearchIcon className='search-icon' />
      </div>
      <div className="header-nav">

        <div className="nav-item">
        <span className='nav-item1' > Hello, Guest </span>
        <span className='nav-item2'>Sign In</span>
        </div>
       
        <div className="nav-item">
        <span className='nav-item1' >Your  </span>
        <span className='nav-item2'>Shop</span>
        </div>
     
        <Link  to={"/checkout"} style={{textDecoration:"none"}} > 
        <div className="basket">
        <ShoppingCartIcon fontSize='large'/>
        <span className='nav-item2 nav-basketCount'> 0</span>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default Navbar