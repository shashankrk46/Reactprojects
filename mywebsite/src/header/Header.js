import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


const Header=()=>{
    return(
        <nav className="header">
            <Link path='/'>
            <h3>SRM</h3></Link>
             <div className="header_search">
             <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
             </div>

             <div className="header_nav">
                 <div className="header_option">

                
                 <a href="#"><span>Hello</span></a>
                 <a href="#"><span>Sign IN</span></a>
                 </div>
             </div>
             <div className="header_nav">
                 <div className="header_option">

                
                 <a href="#"><span>Returns</span></a>
                 <a href="#"><span> & Order</span></a>
                 </div>
             </div>
             <div className="header_nav">
                 <div className="header_option">

                
                 <a href="#"><span>Your</span></a>
                 <a href="#"><span>Prime</span></a>
                 </div>
             </div>
            

            
           
           

           
           
        </nav>
    )
}

export default Header
