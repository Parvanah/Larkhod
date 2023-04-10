import React from 'react';
import { Link } from "react-router-dom";

const Section = () => {
  return (
    
    <div>
    
                <ul>
                    <li>
                    <Link  to="./high">بخش لیسه</Link>
                    </li>
                    <li>
                    <Link   to="./scondary">بخش متوسطه</Link>
                    </li>
                    <li>
                    <Link   to="./primary">بخش ابتداییه</Link>
                    </li>
                </ul> 
            
     </div>
            
  )
}

export default Section