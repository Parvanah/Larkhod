
import React from 'react';
import JSONFiles from './Json Files/SchoolSubjects.json';
import { Link, useLocation } from "react-router-dom"
import book from './assets/books.jpg'
import sanaf from "./assets/sanaf.png";
import './books.css';
const Book = () => {
  var data = JSONFiles.dari_curriculum ;
  var primary = data.primary.grades;
  var secondary = data.secondary.grades;
  var high_school = data.high_school.grades;
  return (
    <div className='download'>
      <div className='top-books'>کتاب های مورد نظر خود را از اینجا انتخاب کنید</div>
      <div className='buttom-books'> 
    <div>
    {primary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"
                      to="/downloading"
                state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade-n" src={sanaf} />
                      <div className="li-grade-b"  src={sanaf} >کتاب های {item.label}</div>
                    </Link>
                  );
                })}
                 <div>
                {secondary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/dowloading"
                      state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade"  />
                      <div className="li-grade-n"> کتاب های {item.label}</div>
                    </Link>
                  );
                })}
              </div>
              <div>
                {high_school.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"  
                      to="/downloading"
                      state={{ subjects: item.subjects }}
                    >
                      <img className="sanaf-grade-n" />
                      <div className="li-grade-n"> کتاب های {item.label}</div>
                    </Link>
                  );
                })}
                </div>
    </div>
    <img src={book}  className='book'/ >
                
       </div>
       </div>
  )
}

export default Book;
