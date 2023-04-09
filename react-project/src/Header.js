import React, {Component} from 'react';
import {FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="./components/index.css" />
const Header = () => {
    return ( 
        <div className='full'>
        <nav className="header">
            <Link to="/">
            </Link>
            <div className="nav">
                <ul className='ul'>
                    <li className='li'>
                    <Link  to="/section">بخش ها</Link>
                    </li>
                    <hr className='vl'/>
                    <li className='li'>
                    <Link   to="/grades">صنف ها</Link>
                    </li>
                    <hr className='vl'/>
                    <li className='li'>
                    <Link   to="/books">کتاب ها</Link>
                    </li>
                    <hr className='vl'/>
                    <li className='li'>
                    <Link  to="/continue">ادامه</Link>
                    </li>
                    <hr className='vl'/>
                    <li className='li'>
                    <Link   to="/about">درباره ما</Link>
                    </li>
                    <hr className='vl'/>
                    <li className='li'>
                    <Link cl  to="/contact">نظریات</Link> 
                    </li>
                    <hr className='vi'/>
                    <div className='contact'>
                        
                    </div>
                    </ul>
                    
                    <button className='button'>
                    <Link   to="/dari">زبان دری</Link> 
                    </button> 
                    <button className='button'>
                    <Link  to="/pashto">پښتو ژبه</Link> 
                    </button>
                
                    <div className='icon'>
                     <FaUser/>
                    </div>
                 
            </div>
        </nav>
        </div>
     );
}
 
export default Header;
