import React from 'react'
import { Link } from "react-router-dom";

const FourthGrade = () => {
  return (
    <div>
      <ul>
        <li>
        <Link  to="./art_fourth">هنر</Link>
        </li>
        <li>
        <Link   to="./dri_fourth">دری</Link>
        </li>
        <li>
        <Link   to="./quran_fourth">قرآن کریم</Link>
        </li>
        <li>
        <Link  to="./hand_writing_fourth">حسن خط</Link>
        </li>
        <li>
        <Link  to="./islamichanafi_fourth">(حنفی)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./islamicjafari_fourth">(جعفری)تعلیمات اسلامی</Link>
        </li>
        <li>
        <Link   to="./math_fourth">ریاضی</Link>
        </li>
        <li>
        <Link   to="./english_fourth">انگلیسی</Link>
        </li>
        <li>
        <Link   to="./pashto_fourth">پشتو</Link>
        </li>
        <li>
        <Link   to="./sicence_fourth">ساینس</Link>
        </li>
        <li>
        <Link   to="./social-sicence_fourth">دروس اجتماعی</Link>
        </li>
    </ul> 
    </div>
  )
}

export default FourthGrade