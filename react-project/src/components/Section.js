import React from 'react';
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div>
                <ul>
                    <li>
                    <Link className='link' to="./high">بخش لیسه</Link>
                    </li>
                    <li>
                    <Link className='link'  to="./scondary">بخش متوسطه</Link>
                    </li>
                    <li>
                    <Link className='link'  to="./primary">بخش ابتداییه</Link>
                    </li>
                </ul> 
            </div>
  )
}

export default Section