import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Section = () => {
  //  const [sections , setSections] = useState([
  //   { title: 'بخش لیسه', body:'....', id:1, section: 'high'},
  //   { title: 'بخش متوسطه', body:'....', id:2, section: 'secondary'},
  //   { title: 'بخش ابتدائیه', body:'....', id:3, section: 'parimary'}
  //  ]);
  
   
  return (
  //   <div>
  //   <div className="section-list">
  //   {sections.map((section)=>(
  //    <div className="section-preview" key={section.id}>
  //    <Link to={`/sections/${section.id}`}>
  //    <h2>{section.title}</h2>
  //    </Link>
  //    </div>
  //   ))}
  // </div>
  //  </div>
    
    <div >
                <ul>
                    <li>
                    <Link   to="./primary">بخش ابتداییه</Link>
                    </li>    
                    <li>
                    <Link   to="./scondary">بخش متوسطه</Link>
                    </li>
                    <li>
                    <Link  to="./high">بخش لیسه</Link>
                    </li>
                </ul> 
            
     </div>
            
  )
}

export default Section