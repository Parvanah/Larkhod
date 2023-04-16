import React from 'react'
import { Link } from "react-router-dom";

const FifthGrade = () => {
  return (
    <div>
          <ul>
        <li>
        <Link  to="./art_fifth">هنر</Link>
        </li>
        <li>
        <Link   to="./dri_fifth">دری</Link>
        </li>
        <li>
        <Link   to="./quran_fifth">قرآن کریم</Link>
        </li>
        <li>
        <Link  to="./hand_writing_fifth">حسن خط</Link>
        </li>
        <li>
        <Link  to="./islamichanafi_fifth">(حنفی)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_fifth">(جعفری)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./math_fifth">ریاضی</Link>
        </li>
        <li>
        <Link   to="./english_fifth">انگلیسی</Link>
        </li>
        <li>
        <Link   to="./pashto_fifth">پشتو</Link>
        </li>
        <li>
        <Link   to="./sicence_fifth">ساینس</Link>
        </li>
        <li>
        <Link   to="./social-sicence_fifth">دروس اجتماعی</Link>
        </li>
    </ul> 
    </div>
  )
}

export default FifthGrade
